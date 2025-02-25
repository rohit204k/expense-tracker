import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")
ALGORITHM = "HS256"
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/expense_tracker")
