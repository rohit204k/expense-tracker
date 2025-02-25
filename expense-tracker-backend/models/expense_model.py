from pydantic import BaseModel

class Expense(BaseModel):
    description: str
    amount: float
    type: str  # "credit" or "debit"
    subtype: str
    date: str
