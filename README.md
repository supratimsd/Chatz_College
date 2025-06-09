🎓 College Connect
College Connect is a private and secure chat application designed exclusively for a college community. It enables students, faculty, and alumni to connect and collaborate through real-time messaging—all while ensuring privacy by requiring only a valid college email ID for authentication.

📌 Overview
In modern academic environments, secure and relevant communication is essential. Traditional platforms often lack privacy, require personal phone numbers, or allow access to unauthorized users. College Connect solves this by enabling verified college members to chat via private or group messages—without ever needing to expose personal contact information.

❗ Problem Statement
Current communication platforms used by students and teachers are:
- Not secure or tailored for college environments.
- Allow unauthorized access or fake users.
- Require personal phone numbers or emails, compromising privacy.

🎯 Objectives
- Build a secure and private chat platform limited to verified college members.
- Authenticate users using their official college email ID.
- Provide real-time one-on-one and group chat capabilities.
- Avoid use of personal data like mobile numbers.
- Offer a minimal, responsive, and intuitive user interface.

✨ Features
- 🔐 **Secure Email-based Authentication**: Sign up/login using only your official college email.
- 💬 **1-on-1 Private Messaging**: Real-time chat between any two verified users.
- 👥 **Group Chats**: Join public groups to collaborate on shared interests or topics.
- 🔎 **User Search**: Search users by name or email to start conversations.
- 📡 **WebSocket-powered Messaging**: Ensures real-time delivery of messages.
- 🎨 **Modern UI**: Tailwind CSS-based responsive layout for desktop and mobile.

🛠 Tech Stack

| Layer      | Technology                          |
|-----------|--------------------------------------|
| 🧠 Frontend  | React.js, Axios, Tailwind CSS         |
| ⚙️ Backend   | Spring Boot, Spring Security, JWT     |
| 🗃 Database | MySQL                                |
| 🔄 Realtime | WebSocket (STOMP over SockJS)         |
| 🧪 Tools    | Postman, Vercel (Frontend Hosting)    |

#### 📌 Why React?
- React is component-based, making it easy to build reusable UI elements.
- It allows fast rendering using a virtual DOM for better performance.
- The React ecosystem (Hooks, Context API) makes it simple to manage state and side effects.
- Seamlessly integrates with WebSockets for real-time chat experiences.
- Tailwind CSS works well with React to deliver a clean, modern, and responsive UI.

#### 📌 Why Spring Boot?
- Spring Boot offers rapid backend development with built-in tools and auto-configuration.
- It integrates smoothly with Spring Security for robust authentication and authorization.
- Supports WebSocket for real-time communication using STOMP and SockJS.
- Layered architecture encourages clean code separation (Controller, Service, Repository).
- Supports JWT easily for stateless, secure REST API access.

#### 📌 Why MySQL?
- MySQL is a reliable and well-supported relational database.
- Supports complex queries and relations between users, messages, and groups.
- Widely used and integrates easily with Spring Data JPA.
- Ensures data consistency and security for critical chat and user info.

🧱 Implementation

1. **Frontend (chatzclient)**
- Built using React.js functional components and hooks.
- Axios handles HTTP requests to the backend.
- WebSocket with STOMP handles real-time messaging.
- UI styled with Tailwind CSS for a clean, modern look.
- Core pages include login, registration, chat screen, user search, and group management.

2. **Backend (chatzserver)**
- Built with Spring Boot, with layered architecture (Controller, Service, Repository).
- JWT-based authentication is used to securely verify users.
- Spring Security enforces token-based access to APIs.
- WebSocket endpoints enable real-time private and group communication.
- MySQL stores user data, group info, and chat histories.

🔐 Authentication Flow
- Users register using their official college email ID (e.g., yourname@college.edu).
- The system validates email domains to ensure authenticity (e.g., only @college.edu accepted).
- Users create a secure password during signup; it is stored using hashing.
- On successful login, a JWT token is issued for client-side storage.
- All REST API requests and WebSocket connections use the token for secure access.

🧪 Group Chat Support
- Users can view a list of available groups from the group chat panel.
- Anyone can join an existing group to participate in discussions.
- Once joined, users can send and receive real-time messages in the group.
- Group chat is powered by WebSocket and stored persistently in the backend.

✅ Conclusion
College Connect is a tailored solution for intra-college communication. By allowing only verified users through college email authentication and avoiding phone number dependencies, it ensures maximum privacy and safety. It offers a simple but effective interface for both personal and group conversations.

This platform can easily be extended in future versions to support:
- 📎 File sharing (notes, PDFs, etc.)
- 📅 Event and announcement boards
- 🔔 In-app notifications
- 🎓 Alumni-student mentorship channels
- 👤 Admin roles for group moderation
🔗 Live Demo
👉 [College Connect (Frontend on Vercel)](https://college-connect-theta.vercel.app)

👥 Contributors
- [Supratim Dey](https://www.linkedin.com/in/supratim-dey07/) 
- [Debanjana Jha](https://www.linkedin.com/in/debanjana-jha-a524b1258/)
- [Sulagnaaa](https://www.linkedin.com/in/sulagna-hore-934526254/)
- [Ridhi Singh](https://www.linkedin.com/in/ridhisingh7595/)






































