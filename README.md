# My-Backend-Learning-Projects

This repository documents my journey into backend development using the Node.js ecosystem. It contains foundational projects built to solidify my understanding of creating RESTful APIs, interacting with databases, and managing application structure.

---

## 🛠️ Technologies Used

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 📂 Repository Structure

The repository is organized into separate directories for each project. Each project contains its own backend server and a corresponding frontend.

/My-Backend-Learning-Projects/
├── 📝 project1-Todo-App/
│   ├── 🔧 Todo-Backend/          # Express.js/Node.js backend
│   └── 🎨 Todo-Frontend/         # React frontend
├── 📰 project2-Blog-App/
│   ├── 🔧 Blog-Backend/          # Express.js/Node.js backend
│   └── 🎨 Blog-Frontend/         # React frontend
└── 📄 README.md

---
## 📝 Project 1: Todo List API

A foundational project focusing on the core principles of RESTful APIs and **CRUD** (Create, Read, Update, Delete) operations. This API allows a client to manage a list of tasks.

### How to Run

1.  Navigate to the backend directory:
    ```sh
    cd project1-Todo-App/Todo-Backend
    ```
2.  Install the required dependencies:
    ```sh
    npm install
    ```
3.  Start the server (with nodemon for auto-reloading):
    ```sh
    npm start (change script in app.json -> ("start" : "nodemon app.js")
    ```

---

## 📖 Project 2: Blog API

This project is an evolution from the Todo app. It introduces the concept of **data relationships** by linking Users to their Posts, a fundamental concept in more complex applications.

### How to Run

1.  Navigate to the backend directory:
    ```sh
    cd project2-Blog-App/Blog-Backend
    ```
2.  Install the required dependencies:
    ```sh
    npm install
    ```
3.  Start the server (with nodemon for auto-reloading):
    ```sh
    npm start (change script in app.json -> ("start" : "nodemon app.js")
    ```

---

## 🎯 Learning Outcomes

Through these projects, I have gained hands-on experience with:
-   Building RESTful APIs from scratch using Express.js.
-   Designing and using MongoDB schemas with Mongoose.
-   Implementing all four CRUD operations against a database.
-   Understanding and modeling one-to-many data relationships (Users and Posts).
-   Structuring a Node.js application with routers and controllers.

## 🌱 Future Improvements

-   [ ] Implement robust user authentication and authorization using JSON Web Tokens (JWT).
-   [ ] Add comprehensive input validation and error handling middleware.
-   [ ] Introduce a "Comments" feature to the Blog API to model many-to-many relationships.
-   [ ] Add pagination to GET routes that return lists of data.
-   [ ] Write unit and integration tests for the APIs.
