from fastapi import APIRouter, HTTPException
from models.user_model import User
from database import db
from utils.hashing import hash_password, verify_password
from utils.auth_utils import create_token

router = APIRouter()

@router.post("/register")
async def register(user: User):
    if db.users.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="User already exists")
    
    hashed_password = hash_password(user.password)
    db.users.insert_one({"username": user.username, "password": hashed_password})
    return {"message": "User registered successfully"}

@router.post("/login")
async def login(user: User):
    db_user = db.users.find_one({"username": user.username})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_token(user.username)
    return {"token": token}