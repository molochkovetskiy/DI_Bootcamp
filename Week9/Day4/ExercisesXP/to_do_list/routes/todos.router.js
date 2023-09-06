const express = require('express');
const router = express.Router();

const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: 'Task is required' });
    }

    const newTodo = {
        id: todos.length + 1,
        task
    };

    todos.push(newTodo);
    res.status(201).json(todos);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const todoId = req.params.id;
    const index = todos.findIndex((todo) => todo.id == todoId);

    if (index === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: 'Task is required' });
    }

    todos[index] = {
        id: todoId,
        task
    };

    res.json(todos);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const todoId = req.params.id;
    const index = todos.findIndex((todo) => todo.id == todoId);

    if (index === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    todos.splice(index, 1);

    res.json(todos);
});

module.exports = { router };