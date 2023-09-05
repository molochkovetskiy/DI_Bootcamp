const express = require('express');
const dotenv = require('dotenv');
const { posts } = require('./config/db.js');
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('/api/posts', (request, response) => {
    response.json(posts);
});

app.get('/api/posts/:id', (request, response) => {
    const postId = request.params.id;
    const post = posts.find((post) => post.id == postId);

    if (!post) {
        return response.status(404).json({ message: 'Blog post not found' });
    }

    response.status(200).json(post);
});

app.post('/api/posts', (request, response) => {
    const { title, content } = request.body;

    if (!title || !content) {
        return response.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost);
    response.json(posts);
});

app.put('/api/posts/:id', (request, response) => {
    const postId = request.params.id;
    const index = posts.findIndex((post) => post.id == postId);

    if (index === -1) {
        return response.status(404).json({ message: 'Blog post not found' });
    }

    const { title, content } = request.body;

    if (!title || !content) {
        return response.status(400).json({ message: 'Title and content are required' });
    }

    posts[index] = {
        id: postId,
        title,
        content
    };

    response.json(posts);
});

app.delete('/api/posts/:id', (request, response) => {
    const postId = request.params.id;
    const index = posts.findIndex((post) => post.id == postId);

    if (index === -1) {
        return response.status(404).json({ message: 'Blog post not found' });
    }

    posts.splice(index, 1);
    response.json(posts);
});

// Error handling for invalid routes
app.use((request, response) => {
    response.status(404).json({ message: 'Route not found' });
});

// Error handling for server errors
app.use((error, request, response, next) => {
    console.log(error.stack);
    response.status(500).json({ message: 'Internal server error' });
});