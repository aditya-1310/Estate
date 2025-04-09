# 🏡 Haven Estate

A modern real estate web application built using the **MERN Stack** that allows users to explore, search, and view property listings with a sleek and responsive design.

> 🚀 [Live Demo](https://estate-rmjs.onrender.com)

---

## 📌 Features

- 🔍 **Browse Listings:** View property cards with images, location, pricing, and property type.
- 🎯 **Filter Properties:** Search and filter by name, type, and price range.
- 🧑‍💼 **Admin Access:** Add, update, or delete property listings.
- 🔐 **User Authentication:** Secure login and registration using JWT.
- 🌐 **Responsive UI:** Mobile-friendly layout using Tailwind CSS.
- 💾 **MongoDB Database:** Stores all property and user data efficiently.
- 🔁 **Persistent Sessions:** Users stay logged in until they choose to logout.

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Axios  
- React Router

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (Authentication)

---

## 📸 Screenshots

| Home Page | Admin Panel | Property Details |
|----------|--------------|------------------|
| ![Home]![image](https://github.com/user-attachments/assets/0fb5d560-c88e-4faf-b206-116363d30624) | ![Admin]![image](https://github.com/user-attachments/assets/f25c9251-0109-411a-951f-28d88265a50b) | ![Details]![{1450DCD2-9B46-457B-A81A-01EDD15328C9}](https://github.com/user-attachments/assets/b7a5c96d-7dc1-48b5-ab74-3898090e67ac) |


---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aditya-1310/Estate.git
   cd Estate
   cd client
   npm install
2. **Install frontend dependencies**
    ```bash
    cd client
   npm instal
2 **Install backend dependencies**

    cd ../server
      npm install
      Create .env file in server/ directory

      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_secret_key
      Run the app

4. **# From project root**
 ```bash
cd server && npm start
cd client && npm start
