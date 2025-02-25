from fastapi import APIRouter, Depends
from models.expense_model import Expense
from database import db
from utils.auth_utils import verify_jwt_token
import datetime
from datetime import timezone

router = APIRouter()

@router.post("/expense")
async def add_expense(expense: Expense, user = Depends(verify_jwt_token)):
    expense_dict = expense.dict()
    expense_dict["username"] = user
    expense_dict["date"] = datetime.datetime.strptime(expense_dict["date"], "%Y-%m-%d")
    expense_dict["date"] = expense_dict["date"].timestamp()
    db.expenses.insert_one(expense_dict)
    return {"message": "Expense added successfully"}


# # Get Expenses
@router.get("/expenses")
async def get_expenses(user=Depends(verify_jwt_token)):
    now = datetime.datetime.now(timezone.utc)
    start_of_month = datetime.datetime(now.year, now.month - 1, 1, tzinfo=timezone.utc).timestamp()
    pipeline = [
        {"$match": {"username": user, "date": {"$gte": start_of_month}}},  # Filter by user
        {"$project": {
            "_id": 0, 
            "description": 1, 
            "amount": 1, 
            "type": 1,
            "subtype": 1,
            "date": {"$dateToString": {"format": "%Y-%m-%d", "date": {"$toDate": {"$multiply": ["$date", 1000]}}}}
        }}
    ]
    
    expenses = list(db.expenses.aggregate(pipeline))
    return {"expenses": expenses}
