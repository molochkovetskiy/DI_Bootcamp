const express = require('express');
const dotenv = require('dotenv');
const dataService = require('./data/dataService');
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
        console.log('Data successfully retrieved and sent as a response');
    } catch (error) {
        console.log('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});