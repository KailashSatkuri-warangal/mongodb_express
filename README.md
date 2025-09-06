# MERN E-commerce Project

[![Localhost](https://img.shields.io/badge/Run%20on-Localhost%3A5000-brightgreen?logo=node.js)](http://localhost:5000)

## 📖 Description
This project is a **MERN (MongoDB, Express, React, Node.js) E-commerce application backend** that serves as the backbone for building a full-featured online shopping platform. The backend handles all core functionalities such as product management, user authentication, order processing, and secure data storage. With modular architecture and well-structured code, this backend can be easily integrated with a React frontend to form a complete MERN stack application.

### Why this project?
E-commerce applications require a robust, scalable, and secure backend to handle thousands of products, users, and transactions efficiently. This project lays the foundation by:
- Designing RESTful APIs with Express.js for clean and consistent communication.
- Integrating MongoDB with Mongoose for flexible and schema-based data modeling.
- Implementing **JWT-based authentication** to ensure secure access control for users and admins.
- Providing reusable middleware for error handling, authentication, and validation.
- Offering a **seeder script** to quickly populate databases with demo products and users for testing.
- Including **Postman collections** for simplified API testing and debugging.

Whether you are a student, beginner, or developer aiming to create an advanced e-commerce platform, this project can be used as a learning resource or a base project for further enhancements.

## 📂 Project Structure
```
mongodb_express/mern-ecommerce
├── backend
│   ├── config            # Database connection & environment configs
│   ├── middleware        # Custom middleware (auth, error handling, etc.)
│   ├── models            # Mongoose models (User, Product, Order)
│   ├── node_modules      # Installed npm packages
│   ├── routes            # Express routes for users, products, orders
│   ├── .env              # Environment variables (Mongo URI, JWT secret)
│   ├── package-lock.json # Dependency lock file
│   ├── package.json      # Project dependencies & scripts
│   ├── seed.js           # Database seeder script
│   └── server.js         # Entry point for Express server
│
└── testung
    ├── postman           # Postman collections for testing APIs
    ├── ssl.log           # SSL related log
    ├── terminal.log      # Terminal session logs
    └── tostart.log       # Startup logs
```

## 🚀 Features
- **MongoDB integration** with Mongoose ODM.
- **Express.js backend** with modular architecture.
- **JWT-based authentication** for secure login/registration.
- **Middleware support** for validation and error handling.
- **Routes for products, users, and orders** with CRUD operations.
- **Seeder script** to preload data.
- **Postman collection** for testing endpoints.

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KailashSatkuri-warangal/mongodb_express/mern-ecommerce.git
   ```

2. Navigate to backend folder:
   ```bash
   cd mongodb_express/mern-ecommerce/backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend folder and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
   👉 To generate a secure secret key, run this command:
   ```bash
   openssl rand -base64 32

5. Run the development server:
   ```bash
   npm start
   ```

6. Open your browser and visit:
   ```
   http://localhost:5000
   ```

## 🧪 Testing
- Use the `testung/postman` collection to test available API endpoints.
- Logs generated during testing and execution are available in `ssl.log`, `terminal.log`, and `tostart.log`.

## 📌 Author
**Kailash Satkuri - Warangal**

---
✅ This backend project forms the **foundation of a scalable full-stack MERN E-commerce application**, designed for real-world use cases and ready to be extended with a powerful React frontend.

