const express = require('express');
const cors = require('cors');
const app = express();
const { usersRouter } = require('./routes/users.router.js');

const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from a .env file

// Middleware: Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Use the usersRouter for all /api/users routes
app.use('/api', usersRouter);

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ msg: 'Route not found' });
});

// Define the port number from environment variables or use a default value (5000)
const PORT = process.env.PORT || 5000;

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});