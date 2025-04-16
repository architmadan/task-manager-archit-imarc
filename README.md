
# Task Management API

Welcome to the Task Management API! This RESTful API is designed to help users manage their personal tasks efficiently. Built with Node.js, Express.js, and MySQL, it features a robust user authentication system and a comprehensive task management functionality.





## Table of Contents

- Features
- Technical Details
- Key Technologies
- Installation
- Configuration
- Running the API
- Functionality
- Error Handling
- Contributing

## Features

- User Authentication:
   - Users can register and log in.
   - Authentication uses JWT (JSON Web Tokens).
   - User passwords are securely encrypted with bcrypt hashing.

- Task Management:
   - Authenticated users can create, read, update, and delete their own tasks.
   - Task details include:
       - id (automatically generated primary key)
       - title (required)
       - description (optional)
       - status (default: pending; options: pending, in-progress, completed)
       - dueDate (required)
       - userId (links the task to the user)
- Users can only access and modify their own tasks


## Technical Details

- Built with Node.js and Express.js.
- MySQL is used for the database.
- Follows a structured project organization (controllers, routes, models, middleware).
- Environment variables (.env) are used for configuration.
- Includes middleware for authentication and error handling.
- Input data is validated.
- Uses appropriate HTTP status codes.
## Tech Stack

- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT)
- bcrypt



## Installation

To get started with the Task Management API, follow these steps:

   1. Clone the repository

   ```bash
    git clone https://github.com/your-username/task-management-api.git 
   ```

   2. Navigate to the project directory:
   ```bash
    cd task-management-api 
   ```

   3. Install the dependencies:
   ```bash
    npm Install 
   ```

4. Set up the database: 
- Ensure you have MySQL installed and running.
- Create a database (e.g., task_management_db).




    
## Configuration



1. Create a .env file in the project root directory.
2. Copy the contents of .env.example into the .env file.
3. Modify the following variables in the .env file:
- DB_HOST: The hostname of your MySQL server.
- DB_USER: Your MySQL username.
- DB_PASSWORD: Your MySQL password.
- DB_DATABASE: The name of the database you created.
- PORT: The port number for the server to listen on (default: 3000).
- JWT_SECRET: A secret key for signing JSON Web Tokens. Use a strong, random value.
## Running the API

Start the server with the following command:

```bash
 npm start
```

The API will be accessible at http://localhost:<PORT>.


## Functionality

The API provides the following main functions:

**User Authentication**

- Registration: Creates a new user account.
- Login: Authenticates a user and provides a JWT.

**Task Management**

- Create Task: Creates a new task for the logged-in user.
- Get All Tasks: Retrieves all tasks for the logged-in user.
- Get Task by ID: Retrieves a specific task (user's own).
- Update Task: Updates a task (user's own).
- Delete Task: Deletes a task (user's own).
## Error Handling

The API handles errors such as:

- Invalid requests.
- Authentication problems.
- Database issues.
- It uses standard HTTP status codes to communicate error types.


## Contributing 


 _Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request._

