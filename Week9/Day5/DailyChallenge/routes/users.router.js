const express = require('express');

// Create a router for users
const usersRouter = express.Router();

// Middleware for parsing JSON requests
usersRouter.use(express.json());

// Import controller functions for users
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser
} = require('../controllers/users.controller.js');

// Define routes for the users
usersRouter.post('/register', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get('/users', getAllUsers);
usersRouter.get('/users/:id', getUser);
usersRouter.put('/users/:id', updateUser);

// Export the usersRouter for use in your main application
module.exports = { usersRouter };