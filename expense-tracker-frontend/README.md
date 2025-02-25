# Expense Tracker Frontend

A **ClojureScript + Reagent**frontend for an **Expense Tracker**application, designed to interact with a FastAPI backend.

## Features
**User Authentication**(Login, Register)  
**Expense Management**(Add, View Expenses)  
**Expense Reports**(Pie Chart & Line Chart for Transactions)  
**JWT-Based Authorization** 
**Styled UI with CSS** 

---

## Project Structure
```
expense_tracker_frontend/
│── src/
│   ├── core.cljs             # Main entry point
│   ├── state.cljs            # Global app state
│   ├── api.cljs              # API interaction functions
│   ├── pages/
│   │   ├── auth.cljs         # Login & Register Pages
│   │   ├── dashboard.cljs    # Dashboard & Navigation
│   │   ├── expenses.cljs     # Expense List & Add Expense
│   │   ├── report.cljs       # Reports & Charts
│   ├── components/
│   │   ├── charts.cljs       # Line & Pie Charts
│── resources/public/
│   ├── index.html            # Frontend entry HTML
│   ├── css/
│   │   ├── base.css          # Global styles
│   │   ├── auth.css          # Login & Register styles
│   │   ├── dashboard.css     # Dashboard styles
│   │   ├── expenses.css      # Expenses styles
│   │   ├── report.css        # Report styles

│── project.clj               # Leiningen project config
│── README.md                 # Documentation
```

---

## Setup & Installation

### **Clone the Repository**
```sh
git clone https://github.com/rohit204k/expense-tracker.git
cd expense-tracker-frontend
```

### **Install Dependencies**
Make sure **Leiningen**is installed (`lein --version` should return a version).
```sh
lein deps
```

### **Start the Frontend Server**
```sh
lein fig:build
```
This will start the development server at **`http://localhost:9500`**.

### **Ensure the Backend is Running**
The frontend expects the **FastAPI backend**to be running at:
```
http://localhost:8000
```
Modify **`base-url` in `api.cljs`**if needed.

---

## API Interaction
### **Authentication**
| Method | Endpoint       | Description          | Payload |
|--------|---------------|----------------------|---------|
| POST   | `/register`   | Register a user      | `{ "username": "test", "password": "pass123" }` |
| POST   | `/login`      | Login & get JWT      | `{ "username": "test", "password": "pass123" }` |

### **Expense Management**
| Method | Endpoint      | Description              | Headers | Payload |
|--------|--------------|--------------------------|---------|---------|
| POST   | `/expense`   | Add an expense           | `Authorization: Bearer <token>` | `{ "description": "Food", "amount": 50, "type": "Debit", "subtype": "Groceries", "date": "2025-02-01" }` |
| GET    | `/expenses`  | Get current month's expenses | `Authorization: Bearer <token>` | - |

### **Reports**
| Method | Endpoint   | Description              | Headers | Query Params |
|--------|-----------|--------------------------|---------|--------------|
| GET    | `/report` | Get Monthly Report       | `Authorization: Bearer <token>` | `year=2025&month=2` |

---

## UI Components
- **Login & Registration Pages**→ Styled with `auth.css`
- **Dashboard**→ Navigation & Logout (`dashboard.css`)
- **Add Expense Page**→ Form inputs & dropdowns (`expenses.css`)
- **Report Page**→ Uses **Chart.js**for Pie & Line charts (`report.css`)

---

## Future Improvements
- **Dark Mode UI**
- **Expense Categories with Icons**
- **Responsive Design for Mobile**
- **Deploy with GitHub Pages / Vercel**

---

### **Built with ❤️ using ClojureScript & Reagent**
