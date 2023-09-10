const express = require('express');
const app = express();
const { postsRouter } = require('./routes/posts.router.js');

const dotenv = require('dotenv');
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Use the posts router for handling blog post routes
app.use('/api/posts', postsRouter);

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