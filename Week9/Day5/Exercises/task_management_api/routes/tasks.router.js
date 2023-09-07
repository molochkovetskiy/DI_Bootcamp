const express = require('express');

// Create a router for tasks
const tasksRouter = express.Router();

// Middleware for parsing JSON requests
tasksRouter.use(express.json());

// Import necessary middleware functions
const {
    validateTaskData,
    errorHandler,
} = require('../middlewares/utils.js')

// Import controller functions for tasks
const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks.controller.js');

// Define routes for the tasks
tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:id', getTask);

tasksRouter.post('/', validateTaskData, createTask);

tasksRouter.put('/:id', validateTaskData, updateTask);

tasksRouter.delete('/:id', deleteTask);

// Apply the global error handling middleware to handle errors
tasksRouter.use(errorHandler);

// Export the tasksRouter for use in your main application
module.exports = { tasksRouter };