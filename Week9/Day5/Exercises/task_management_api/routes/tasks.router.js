const express = require('express');

const tasks_router = express.Router();
tasks_router.use(express.json());

const {
    validateTaskData,
    errorHandler,
} = require('../middlewares/utils.js')

const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks.controller.js');

tasks_router.get('/', getAllTasks);

tasks_router.get('/:id', getTask);

tasks_router.post('/', validateTaskData, createTask);

tasks_router.put('/:id', validateTaskData, updateTask);

tasks_router.delete('/:id', deleteTask);

module.exports = { tasks_router };