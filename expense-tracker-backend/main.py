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
