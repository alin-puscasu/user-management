## A portfolio project to demonstrate my fullstack development skills with authentication, protected routes, and role-based access.


# 🔐 Full Stack Auth App

A complete full-stack authentication project built with:

- ⚙️ **Backend:** Node.js, Express, PostgreSQL
- 💻 **Frontend:** React
- 🔐 **Authentication:** JSON Web Tokens (JWT)

This project demonstrates my ability to build secure, scalable, and responsive web applications from scratch — both backend and frontend.

---

## 🎯 What it does

- ✅ User Signup & Login with JWT
- ✅ Role-based access (Admin / User)
- ✅ Protected routes using React Hooks
- ✅ Token validation on each route
- ✅ Responsive, modern UI

---

## 🏗️ Technologies Used

### Backend
- Node.js
- Express
- PostgreSQL
- JWT
- bcrypt
- CORS
- dotenv

### Frontend
- React
- React Router
- Axios
- Context API
- Tailwind CSS

---

## 📁 Project Structure

- `backend/`
  - `controllers/` – Logic for handling requests
  - `middlewares/` – Auth middleware (e.g., protect routes)
  - `routes/` – Auth & user routes
  - `services/` – JWT, password hashing, user logic
  - `config/` – DB connection, env config
  - `models/` – Database models (optional)
  - `app.js` – Express app entry point
  - `server.js` – Server runner

- `frontend/`
  - `public/` – Static files
  - `src/`
    - `components/` – Reusable UI components
    - `pages/` – Pages (Home, Login, Dashboard etc.)
    - `hooks/` – Custom React hooks (e.g., useAuth)
    - `context/` – Auth context provider
    - `App.js` – App routing and layout
    - `main.jsx` – Entry point

- `.env`, `.gitignore`, `README.md`, `package.json` – Root-level files

## 🧠 Why I built this
As someone starting out in the tech industry with no professional experience yet, I wanted to prove my skills with a real-world project that covers:
- Backend API design & security
- Frontend development and state management
- Full authentication flow with role-based access
- This app is part of my portfolio and shows that I can build and understand fullstack systems from scratch.

## ✉️ Contact
  If you're hiring or have feedback, feel free to reach out!
- Email: alinpuscasuinfo@gmail.com
- LinkedIn: [Alin Pușcașu](https://www.linkedin.com/in/alin-puscasu-info/)

## 🧰 Future Improvements

- User profile editing
- Password reset functionality
- More work on front-end
- Implementing a feed and post functionality, similar to social media platforms
