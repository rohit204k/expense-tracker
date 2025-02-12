# 💰 Expense Tracker Project

This repository contains both the **frontend (ClojureScript + Reagent)** and **backend (FastAPI + MongoDB)** for an expense tracker application.

## 📂 Project Structure
```
expense-tracker/
│── expense-tracker-frontend/   # Frontend built with ClojureScript + Reagent
│── expense-tracker-backend/    # Backend built with FastAPI + MongoDB
```

---

## 🔧 Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/rohit204k/expense-tracker.git
cd expense-tracker
```

---

## 🚀 Setting Up the Backend (FastAPI)

### **2️⃣ Navigate to the Backend Folder**
```sh
cd expense-tracker-backend
```

### **3️⃣ Create a Virtual Environment (Optional but Recommended)**
```sh
python -m venv venv
source venv/bin/activate  # On Mac/Linux
venv\Scripts\activate   # On Windows
```

### **4️⃣ Install Dependencies**
```sh
pip install -r requirements.txt
```

### **5️⃣ Set Up Environment Variables**
📍 **Create a `.env` file** inside `expense-tracker-backend/`:
```sh
touch .env
```
📍 **Add the following to `.env`:**
```sh
SECRET_KEY=your_secret_key_here
MONGO_URI=mongodb+srv://your-mongo-connection-uri
```

### **6️⃣ Run the FastAPI Backend**
```sh
uvicorn main:app --reload
```
✅ **Backend will be running at**: `http://localhost:8000`  
✅ **Swagger API Docs**: `http://localhost:8000/docs`

---

## 🎨 Setting Up the Frontend (ClojureScript + Reagent)

### **7️⃣ Navigate to the Frontend Folder**
```sh
cd ../expense-tracker-frontend
```

### **8️⃣ Install Dependencies**
Make sure **Leiningen** is installed (`lein --version` should return a version).
```sh
lein deps
```

### **9️⃣ Start the Frontend Development Server**
```sh
lein fig:build
```
✅ **Frontend will be running at**: `http://localhost:9500`  
✅ **Ensure Backend is running before logging in.**  

---

## 📜 API Endpoints

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

## 🛠️ Future Improvements
- ✅ **Dark Mode UI**
- ✅ **Expense Categories with Icons**
- ✅ **Responsive Design for Mobile**
- ✅ **Deploy to GitHub Pages / Vercel**

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request. 

---

## 📜 License
MIT License. Feel free to modify and use this project.

---

### **🔥 Built with ❤️ using FastAPI, ClojureScript, Reagent & MongoDB 🚀**
