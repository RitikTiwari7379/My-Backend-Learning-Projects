# My-Backend-Learning-Projects

This repository documents my journey into backend development using the Node.js ecosystem. It contains foundational projects built to solidify my understanding of creating RESTful APIs, interacting with databases, and managing application structure.

---

## 🛠️ Technologies Used

![Node.js]()
![Express.js]()
![MongoDB]()
![Mongoose]()
![Git]()
![GitHub]()

---

## 📂 Repository Structure

The repository is organized into separate directories for each project. Each project contains its own backend server.

/My-Backend-Learning-Projects
|
|-- project1-Todo-App/
|   |-- Todo-Backend/      
|   |-- Todo-Frontend/     
|
|-- project2-Blog-App/
|   |-- Blog-Backend/     
|   |-- Blog-Frontend/   
|
|-- README.md


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
    npm run dev
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

## 🌱 Future Improvements

-   [ ] Implement robust user authentication and authorization using JSON Web Tokens (JWT).
-   [ ] Add comprehensive input validation and error handling middleware.
-   [ ] Introduce a "Comments" feature to the Blog API to model many-to-many relationships.
-   [ ] Add pagination to GET routes that return lists of data.
-   [ ] Write unit and integration tests for the APIs.
