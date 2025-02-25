from fastapi import APIRouter, Depends, Query, HTTPException
from database import db
from utils.auth_utils import verify_jwt_token
import datetime

router = APIRouter()

@router.get("/report")
async def get_report(
    user: str = Depends(verify_jwt_token),
    year: int = Query(..., description="Year for the report"),
    month: int = Query(..., description="Month for the debit percentage split")
):
    try:
        # Define date ranges
        dates = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
        start_of_month = datetime.datetime.strptime(f"{year}-{month:02d}-01", "%Y-%m-%d")
        start_of_year = datetime.datetime.strptime(f"{year}-01-01", "%Y-%m-%d")
        end_of_month = datetime.datetime.strptime(f"{year}-{month:02d}-{dates[month]}", "%Y-%m-%d")

        ### 1️⃣ Debit Transactions Percentage Split (For Given Month & Year)
        debit_pipeline = [
            {"$match": {"username": user, "type": "Debit", "date": {"$gte": start_of_month.timestamp(), "$lte": end_of_month.timestamp()}}},
            {"$group": {"_id": "$subtype", "total": {"$sum": "$amount"}}}
        ]
        debit_data = list(db.expenses.aggregate(debit_pipeline))
        total_debit_amount = sum(item["total"] for item in debit_data) if debit_data else 1  # Avoid division by zero

        debit_percentage_split = [
            {"subtype": item["_id"], "percentage": (item["total"] / total_debit_amount) * 100}
            for item in debit_data
        ]

        ### 2️⃣ Monthly Credit & Debit Sum (From Start of the Year to Current Month)
        monthly_pipeline = [
            {"$match": {"username": user, "date": {"$gte": start_of_year.timestamp()}}},
            {"$project": {
                "datetime": {"$toDate": {"$multiply": ["$date", 1000]}},
                "type": 1,
                "amount": 1
            }},
            {"$project": {
                "month": {"$month": "$datetime"},
                "type": 1,
                "amount": 1
            }},
            {"$group": {
                "_id": {"month": "$month", "type": "$type"},
                "total": {"$sum": "$amount"}
            }}
        ]
        monthly_data = list(db.expenses.aggregate(monthly_pipeline))
        
        monthly_credit_debit = {}
        for item in monthly_data:
            month_str = item["_id"]["month"]
            txn_type = item["_id"]["type"]
            if month_str not in monthly_credit_debit:
                monthly_credit_debit[month_str] = {"Credit": 0, "Debit": 0}
            monthly_credit_debit[month_str][txn_type] = item["total"]

        ### 3️⃣ Current Month's Total Transactions
        total_pipeline = [
            {"$match": {"username": user, "type": "Debit", "date": {"$gte": start_of_month.timestamp(), "$lte": end_of_month.timestamp()}}},
            {"$group": {"_id": None, "total": {"$sum": "$amount"}}}
        ]
        total_data = list(db.expenses.aggregate(total_pipeline))
        current_month_total = total_data[0]["total"] if total_data else 0

        return {
            "debit_percentage_split": debit_percentage_split,
            "monthly_credit_debit": monthly_credit_debit,
            "current_month_total": current_month_total
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))