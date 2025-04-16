# Task-Manager-Archit-imarc
Task Management Application with User Authentication 

**Description**
This is a RESTful API built using Node.js, Express.js, and MySQL to help users manage their personal tasks. It includes a user authentication system.

**Features**
_User Authentication:_

Users can register and log in.

Authentication uses JWT (JSON Web Tokens).

User passwords are encrypted with bcrypt hashing for security.

_Task Management:_

Authenticated users can create, read, update, and delete their own tasks.

Task details include:

id (automatically generated primary key)

title (required)

description (optional)

status (default: pending; options: pending, in-progress, completed)

dueDate (required)

userId (links the task to the user)

Users can only access and modify their own tasks.

_Technical Details:_

Built with Node.js and Express.js.

MySQL is used for the database.

Follows a structured project organization (controllers, routes, models, middleware).

Environment variables (.env) are used for configuration.

Includes middleware for authentication and error handling.

Input data is validated.

Uses appropriate HTTP status codes.

_Key Technologies_
Node.js

Express.js

MySQL

JSON Web Tokens (JWT)

bcrypt


**Functionality**
The API provides the following main functions:

_1. User Authentication_

Registration: Creates a new user account.

Login: Authenticates a user and provides a JWT.

_2. Task Management_

Create Task: Creates a new task for the logged-in user.

Get All Tasks: Retrieves all tasks for the logged-in user.

Get Task by ID: Retrieves a specific task (user's own).

Update Task: Updates a task (user's own).

Delete Task: Deletes a task (user's own).

**Error Handling**
The API handles errors such as:

Invalid requests.

Authentication problems.

Database issues.

It uses standard HTTP status codes to communicate error types.
