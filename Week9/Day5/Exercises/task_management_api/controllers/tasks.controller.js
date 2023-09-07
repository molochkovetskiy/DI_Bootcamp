const fs = require('fs').promises;

// Define the path to the tasks.json file
const tasksFilePath = './config/tasks.json';

// GET - Retrieve a list of all tasks from the JSON file
const getAllTasks = async (req, res, next) => {
    try {
        const data = await fs.readFile(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

// GET - Retrieve a specific task by ID from the JSON file
const getTask = async (req, res, next) => {
    const taskId = req.params.id;

    try {
        const data = await fs.readFile(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        const task = tasks.find((task) => task.id == taskId);

        if (!task) {
            res.status(404).json({ msg: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

// POST - Create a new task and store it in the JSON file
const createTask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const data = await fs.readFile(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);

        const highestId = tasks.reduce((maxId, task) => {
            const taskId = parseInt(task.id, 10);
            return taskId > maxId ? taskId : maxId;
        }, 0);

        const newTask = {
            id: (highestId + 1).toString(),
            title,
            description,
        };

        tasks.push(newTask);

        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));

        res.status(201).json(tasks);
    } catch (err) {
        next(err);
    }
};

// PUT - Update a task by ID in the JSON file
const updateTask = async (req, res, next) => {
    const taskId = req.params.id;
    const { title, description } = req.body;

    try {
        const data = await fs.readFile(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        const taskIndex = tasks.findIndex((task) => task.id == taskId);

        if (taskIndex == -1) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        tasks[taskIndex] = {
            id: taskId,
            title,
            description,
        };

        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));

        res.json({ tasks });
    } catch (err) {
        next(err);
    }
};

// DELETE - Delete a task by ID from the JSON file
const deleteTask = async (req, res, next) => {
    const taskId = req.params.id;

    try {
        const data = await fs.readFile(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        const taskIndex = tasks.findIndex((task) => task.id == taskId);

        if (taskIndex == -1) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        tasks.splice(taskIndex, 1);

        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));

        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};