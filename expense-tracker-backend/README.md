# 🚀 Expense Tracker Backend

A FastAPI-powered backend for an expense tracker application, supporting **user authentication, expense management, and monthly reports**.

## 📌 Features
✅ **User Authentication** (Register & Login with JWT)  
✅ **Expense Management** (Add & Retrieve Expenses)  
✅ **Expense Reports** (Monthly Debit Split, Credit/Debit Trends)  
✅ **MongoDB Database** for persistence  
✅ **CORS Support** for frontend integration  

---

## 📂 Project Structure
```
expense_tracker_backend/
│── main.py                   # Entry point for FastAPI
│── config.py                 # Configuration settings (DB, JWT Secrets)
│── database.py               # MongoDB connection setup
│── models/
│   ├── user_model.py         # User-related Pydantic models
│   ├── expense_model.py      # Expense-related Pydantic models
│── routes/
│   ├── auth.py               # Authentication (Register, Login)
│   ├── expenses.py           # Expense Management
│   ├── report.py             # Reports & Analytics
│── utils/
│   ├── auth_utils.py         # JWT Authentication Helpers
│   ├── hashing.py            # Password Hashing
│── .env                      # Environment Variables
│── requirements.txt          # Dependencies
│── README.md                 # Documentation
```

---

## 🔧 Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/rohit204k/expense-tracker.git
cd expense-tracker-backend
```

### **2️⃣ Create a Virtual Environment (Optional but Recommended)**
```sh
python -m venv .venv
source venv/bin/activate  # On Mac/Linux
venv\Scripts\activate     # On Windows
```

### **3️⃣ Install Dependencies**
```sh
pip install -r requirements.txt
```

### **4️⃣ Set Up Environment Variables**
📍 **Create a `.env` file** inside the project root:  
```sh
touch .env
```
📍 **Add the following to `.env`:**
```sh
SECRET_KEY=your_secret_key_here
MONGO_URI=mongodb+srv://your-mongo-connection-uri
```

### **5️⃣ Run the FastAPI Server**
```sh
uvicorn main:app --reload
```

---

## 🚀 API Endpoints
### **🟢 Authentication**
| Method | Endpoint       | Description          | Payload |
|--------|---------------|----------------------|---------|
| POST   | `/register`   | Register a user      | `{ "username": "test", "password": "pass123" }` |
| POST   | `/login`      | Login & get JWT      | `{ "username": "test", "password": "pass123" }` |

### **🟠 Expense Management**
| Method | Endpoint      | Description              | Headers | Payload |
|--------|--------------|--------------------------|---------|---------|
| POST   | `/expense`   | Add an expense           | `Authorization: Bearer <token>` | `{ "description": "Food", "amount": 50, "type": "Debit", "subtype": "Groceries", "date": "2025-02-01" }` |
| GET    | `/expenses`  | Get current month's expenses | `Authorization: Bearer <token>` | - |

### **🔵 Reports**
| Method | Endpoint   | Description              | Headers | Query Params |
|--------|-----------|--------------------------|---------|--------------|
| GET    | `/report` | Get Monthly Report       | `Authorization: Bearer <token>` | `year=2025&month=2` |

---

## 🎯 Project Highlights
- **JWT-Based Authentication**
- **MongoDB Aggregations for Reports**
- **Modularized Codebase for Scalability**
- **FastAPI’s Auto-Generated API Docs** (`http://localhost:8000/docs`)

---

## 🛠️ Future Improvements
- ✅ Add Expense **Categories & Budgets**
- ✅ Support **Recurring Transactions**
- ✅ Implement **Email Verification for Users**
- ✅ Deploy to **AWS/GCP**

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request. 

---

## 📜 License
MIT License. Feel free to modify and use this project.

---

### **🔥 Built with ❤️ using FastAPI & MongoDB 🚀**
