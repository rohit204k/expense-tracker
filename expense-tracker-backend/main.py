# from fastapi import FastAPI, Depends, HTTPException, status, Request, Query
# from fastapi.middleware.cors import CORSMiddleware
# from pymongo import MongoClient
# from pydantic import BaseModel
# from bson import ObjectId
# import bcrypt
# from jose import jwt, JWTError
# import datetime
# from datetime import timezone
# from fastapi.param_functions import Depends
# from fastapi.security import HTTPAuthorizationCredentials, HTTPBasic, HTTPBasicCredentials, HTTPBearer

# # App Setup
# app = FastAPI()
# security = HTTPBearer()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Change this to the specific frontend URL in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# # MongoDB Connection
# client = MongoClient("MONGO_URI")
# db = client["expense_tracker"]

# SECRET_KEY = "mysecretkey"  # Change this in production
# ALGORITHM = "HS256"

# # User Model
# class User(BaseModel):
#     username: str
#     password: str

# # Expense Model
# class Expense(BaseModel):
#     description: str
#     amount: float
#     type: str  # "credit" or "debit"
#     subtype: str
#     date: str

# # Helper function to hash passwords
# def hash_password(password: str) -> str:
#     return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

# # Helper function to verify passwords
# def verify_password(password: str, hashed_password: str) -> bool:
#     return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))

# # Helper function to create JWT tokens
# def create_token(username: str):
#     expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=24)
#     return jwt.encode({"sub": username, "exp": expiration}, SECRET_KEY, algorithm=ALGORITHM)

# # Helper function to verify JWT tokens
# def verify_jwt_token(request: Request):
#     auth_header = request.headers.get("Authorization")
#     if not auth_header or not auth_header.startswith("Bearer "):
#         raise HTTPException(status_code=401, detail="Missing or invalid token")
    
#     token = auth_header.split("Bearer ")[1]
    
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         return payload["sub"]
#     except JWTError:
#         raise HTTPException(status_code=401, detail="Invalid token")

# # User Registration
# @app.post("/register")
# async def register(user: User):
#     if db.users.find_one({"username": user.username}):
#         raise HTTPException(status_code=400, detail="User already exists")
    
#     hashed_password = hash_password(user.password)
#     db.users.insert_one({"username": user.username, "password": hashed_password})
#     return {"message": "User registered successfully"}

# # User Login
# @app.post("/login")
# async def login(user: User):
#     db_user = db.users.find_one({"username": user.username})
#     if not db_user or not verify_password(user.password, db_user["password"]):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
    
#     token = create_token(user.username)
#     return {"token": token}

# # Add Expense
# @app.post("/expense")
# async def add_expense(expense: Expense, user = Depends(verify_jwt_token)):
#     expense_dict = expense.dict()
#     expense_dict["username"] = user
#     expense_dict["date"] = datetime.datetime.strptime(expense_dict["date"], "%Y-%m-%d")
#     expense_dict["date"] = expense_dict["date"].timestamp()
#     db.expenses.insert_one(expense_dict)
#     return {"message": "Expense added successfully"}

# # # Get Expenses
# @app.get("/expenses")
# async def get_expenses(user=Depends(verify_jwt_token)):
#     now = datetime.datetime.now(timezone.utc)
#     start_of_month = datetime.datetime(now.year, now.month - 1, 1, tzinfo=timezone.utc).timestamp()
#     pipeline = [
#         {"$match": {"username": user, "date": {"$gte": start_of_month}}},  # Filter by user
#         {"$project": {
#             "_id": 0, 
#             "description": 1, 
#             "amount": 1, 
#             "type": 1,
#             "subtype": 1,
#             "date": {"$dateToString": {"format": "%Y-%m-%d", "date": {"$toDate": {"$multiply": ["$date", 1000]}}}}
#         }}
#     ]
    
#     expenses = list(db.expenses.aggregate(pipeline))
#     return {"expenses": expenses}

# # # Get Monthly Report
# # @app.get("/report")
# # async def get_report(user = Depends(verify_jwt_token)):
#     # pipeline = [
#     #     {"$match": {"username": user}},
#     #     {"$group": {"_id": "$type", "total": {"$sum": "$amount"}}}
#     # ]
#     # report = list(db.expenses.aggregate(pipeline))
#     # return {"report": report}

# @app.get("/report")
# async def get_report(
#     user: str = Depends(verify_jwt_token),
#     year: int = Query(..., description="Year for the report"),
#     month: int = Query(..., description="Month for the debit percentage split")
# ):
#     try:
#         # Define date ranges
#         dates = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
#         start_of_month = datetime.datetime.strptime(f"{year}-{month:02d}-01", "%Y-%m-%d")
#         start_of_year = datetime.datetime.strptime(f"{year}-01-01", "%Y-%m-%d")
#         end_of_month = datetime.datetime.strptime(f"{year}-{month:02d}-{dates[month]}", "%Y-%m-%d")

#         ### 1️⃣ Debit Transactions Percentage Split (For Given Month & Year)
#         debit_pipeline = [
#             {"$match": {"username": user, "type": "Debit", "date": {"$gte": start_of_month.timestamp(), "$lte": end_of_month.timestamp()}}},
#             {"$group": {"_id": "$subtype", "total": {"$sum": "$amount"}}}
#         ]
#         debit_data = list(db.expenses.aggregate(debit_pipeline))
#         total_debit_amount = sum(item["total"] for item in debit_data) if debit_data else 1  # Avoid division by zero

#         debit_percentage_split = [
#             {"subtype": item["_id"], "percentage": (item["total"] / total_debit_amount) * 100}
#             for item in debit_data
#         ]

#         ### 2️⃣ Monthly Credit & Debit Sum (From Start of the Year to Current Month)
#         monthly_pipeline = [
#             {"$match": {"username": user, "date": {"$gte": start_of_year.timestamp()}}},
#             {"$project": {
#                 "datetime": {"$toDate": {"$multiply": ["$date", 1000]}},
#                 "type": 1,
#                 "amount": 1
#             }},
#             {"$project": {
#                 "month": {"$month": "$datetime"},
#                 "type": 1,
#                 "amount": 1
#             }},
#             {"$group": {
#                 "_id": {"month": "$month", "type": "$type"},
#                 "total": {"$sum": "$amount"}
#             }}
#         ]
#         monthly_data = list(db.expenses.aggregate(monthly_pipeline))
        
#         monthly_credit_debit = {}
#         for item in monthly_data:
#             month_str = item["_id"]["month"]
#             txn_type = item["_id"]["type"]
#             if month_str not in monthly_credit_debit:
#                 monthly_credit_debit[month_str] = {"Credit": 0, "Debit": 0}
#             monthly_credit_debit[month_str][txn_type] = item["total"]

#         total_pipeline = [
#             {"$match": {"username": user, "type": "Debit", "date": {"$gte": start_of_month.timestamp(), "$lte": end_of_month.timestamp()}}},
#             {"$group": {"_id": None, "total": {"$sum": "$amount"}}}
#         ]
#         total_data = list(db.expenses.aggregate(total_pipeline))
#         current_month_total = total_data[0]["total"] if total_data else 0

#         return {
#             "debit_percentage_split": debit_percentage_split,
#             "monthly_credit_debit": monthly_credit_debit,
#             "current_month_total": current_month_total
#         }

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, expenses, report

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routes
app.include_router(auth.router)
app.include_router(expenses.router)
app.include_router(report.router)
