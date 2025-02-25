from jose import jwt, JWTError
from fastapi import HTTPException, Request
import datetime
from config import SECRET_KEY, ALGORITHM

# Create JWT Token
def create_token(username: str):
    expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    return jwt.encode({"sub": username, "exp": expiration}, SECRET_KEY, algorithm=ALGORITHM)

# Verify JWT Token
def verify_jwt_token(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid token")
    
    token = auth_header.split("Bearer ")[1]
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload["sub"]
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
