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

The repository is organized into separate directories for each project. Each project contains its own backend server.

/My-Backend-Learning-Projects
|
|-- project1-Todo-App/
|   |-- Todo-Backend/      <-- Node.js API for the Todo App
|   |-- Todo-Frontend/     <-- Simple frontend to interact with the API
|
|-- project2-Blog-App/
|   |-- Blog-Backend/      <-- Node.js API for the Blog App
|   |-- Blog-Frontend/     <-- Simple frontend to interact with the API
|
|-- README.md


---

## 📝 Project 1: Todo List API

A foundational project focusing on the core principles of RESTful APIs and **CRUD** (Create, Read, Update, Delete) operations. This API allows a client to manage a list of tasks.

### Features & API Endpoints

* **Create a new task:** `POST /tasks`
* **Get all tasks:** `GET /tasks`
* **Get a single task by ID:** `GET /tasks/:id`
* **Delete a task:** `DELETE /tasks/:id`

### How to Run

1.  Navigate to the backend directory:
    ```sh
    cd project1-Todo-App/Todo-Backend
    ```
2.  Install the required dependencies:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the `Todo-Backend` directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string_here
    PORT=8000
    ```
4.  Start the server (with nodemon for auto-reloading):
    ```sh
    npm run dev
    ```

---

## 📖 Project 2: Blog API

This project is an evolution from the Todo app. It introduces the concept of **data relationships** by linking Users to their Posts, a fundamental concept in more complex applications.

### Features & API Endpoints

* **User Management:**
    * Register a new user: `POST /users/register`
    * Login a user: `POST /users/login`
* **Post Management:**
    * Create a new post (requires login): `POST /posts`
    * Get all posts from all users: `GET /posts`
    * Get details of a single post: `GET /posts/:id`
    * Update a post (must be the author): `PATCH /posts/:id`
    * Delete a post (must be the author): `DELETE /posts/:id`

### How to Run

1.  Navigate to the backend directory:
    ```sh
    cd project2-Blog-App/Blog-Backend
    ```
2.  Install the required dependencies:
    ```sh
    npm install
    ```
3.  Start the server:
    ```sh
    npm run dev
    ```

---

## 🎯 Learning Outcomes

Through these projects, I have gained hands-on experience with:
-   Building RESTful APIs from scratch using Express.js.
-   Designing and using MongoDB schemas with Mongoose.
-   Implementing all four CRUD operations against a database.
-   Understanding and modeling one-to-many data relationships (Users and Posts).
-   Structuring a Node.js application with routers and controllers.
-   Using environment variables (`dotenv`) to manage sensitive information.

## 🌱 Future Improvements

-   [ ] Implement robust user authentication and authorization using JSON Web Tokens (JWT).
-   [ ] Add comprehensive input validation and error handling middleware.
-   [ ] Introduce a "Comments" feature to the Blog API to model many-to-many relationships.
-   [ ] Add pagination to GET routes that return lists of data.
-   [ ] Write unit and integration tests for the APIs.
