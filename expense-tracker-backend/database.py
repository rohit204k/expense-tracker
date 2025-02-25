from pymongo import MongoClient
from config import MONGO_URI

# MongoDB Connection
client = MongoClient(MONGO_URI)
db = client["expense_tracker"]
