const express = require('express');
const {errorHandler} =require('./middlewares/utils.js')
const app = express();
const {tasks_router} = require('./routes/tasks.router.js');

const dotenv = require('dotenv');
dotenv.config();

// Use the tasks_router for all /api/tasks routes
app.use('/api/tasks', tasks_router);

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ msg: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});