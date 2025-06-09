# 🎓 College Connect  
[GitHub Repository](https://github.com/supratimsd/College-Connect)  

College Connect is a private and secure chat application designed exclusively for a college community. It enables students, faculty, and alumni to connect and collaborate through real-time messaging—all while ensuring privacy by requiring only a valid college email ID for authentication.

---

## 📌 Overview  
In modern academic environments, secure and relevant communication is essential. Traditional platforms often lack privacy, require personal phone numbers, or allow access to unauthorized users. College Connect solves this by enabling verified college members to chat via private or group messages—without ever needing to expose personal contact information.

---

## ❗ Problem Statement  
Current communication platforms used by students and teachers are:  
- Not secure or tailored for college environments.  
- Allow unauthorized access or fake users.  
- Require personal phone numbers or emails, compromising privacy.

---

## 🎯 Objectives  
- Build a secure and private chat platform limited to verified college members.  
- Authenticate users using their official college email ID.  
- Provide real-time one-on-one and group chat capabilities.  
- Avoid use of personal data like mobile numbers.  
- Offer a minimal, responsive, and intuitive user interface.

---

## ✨ Features  
- 🔐 **Secure Email-based Authentication**  
- 💬 **1-on-1 Private Messaging**  
- 👥 **Group Chats**  
- 🔎 **User Search**  
- 📡 **WebSocket-powered Messaging**  
- 🎨 **Modern UI with Tailwind CSS**

---

## 🛠 Tech Stack

| Layer      | Technology                          |
|-----------|--------------------------------------|
| 🧠 Frontend  | React.js, Axios, Tailwind CSS         |
| ⚙️ Backend   | Spring Boot, Spring Security, JWT     |
| 🗃 Database | MySQL                                |
| 🔄 Realtime | WebSocket (STOMP over SockJS)         |
| 🧪 Tools    | Postman, Vercel (Frontend Hosting)    |

---

## 📌 Why React?
- Component-based for reusable UI.
- Fast performance using Virtual DOM.
- Hooks and Context API simplify state management.
- Easy integration with WebSocket for live messaging.
- Tailwind CSS supports responsive design out of the box.

## 📌 Why Spring Boot?
- Rapid development with minimal configuration.
- Spring Security simplifies authentication/authorization.
- Easy JWT integration for stateless APIs.
- Built-in support for WebSocket endpoints.
- Clean layered architecture (Controller-Service-Repo).

## 📌 Why MySQL?
- Widely used relational database.
- Supports complex relationships and queries.
- Secure, consistent, and scalable.
- Integrates seamlessly with Spring Data JPA.

---

## 🧱 Implementation

### 1. **Frontend (chatzclient)**
- Built using React.js functional components.  
- Axios for REST API calls.  
- STOMP over WebSocket for real-time updates.  
- UI built using Tailwind CSS.  
- Main components: Login, Signup, Chat, User Search, Group Chat.

### 2. **Backend (chatzserver)**
- Spring Boot REST API with layered structure.  
- JWT-based secure authentication.  
- WebSocket endpoints for real-time communication.  
- MySQL for persistent user and message data.  

---

## 🔐 Authentication Flow  
- Register using official college email (e.g., `yourname@college.edu`).  
- Email domain is validated.  
- Passwords are securely hashed.  
- Upon login, a JWT token is issued.  
- All REST/WebSocket requests require token authentication.

---

## This platform can easily be extended in future versions to support:
- 📎 File sharing (notes, PDFs, etc.)
- 📅 Event and announcement boards
- 🔔 In-app notifications
- 🎓 Alumni-student mentorship channels
- 👤 Admin roles for group moderation
---
## 🔗 Live Demo
👉 [College Connect (Frontend on Vercel)](https://college-connect-theta.vercel.app)

## 👥 Contributors
- [Supratim Dey](https://www.linkedin.com/in/supratim-dey07/) 
- [Debanjana Jha](https://www.linkedin.com/in/debanjana-jha-a524b1258/)
- [Sulagnaaa](https://www.linkedin.com/in/sulagna-hore-934526254/)
- [Ridhi Singh](https://www.linkedin.com/in/ridhisingh7595/)

## 📥 How to Clone & Run the Project

```bash
# 1️⃣ Clone the repository
git clone https://github.com/supratimsd/College-Connect.git

# 2️⃣ Navigate into the project folder
cd College-Connect

# 3️⃣ Navigate to the frontend folder and install dependencies
cd chatzclient
npm install

# 4️⃣ Start the React frontend
npm run dev
# or
npm start

# 5️⃣ Open a new terminal, go to backend folder and run the Spring Boot server
cd ../chatzserver
./mvnw spring-boot:run
