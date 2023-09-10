const express = require('express');
const postsRouter = express.Router();

const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} = require('../controllers/posts.controller.js');


// CRUD - Read - get all products
postsRouter.get('/', getAllPosts);

// CRUD - Read - get one product
postsRouter.get('/:id', getPostById);

// CRUD - Create a new product - POST
postsRouter.post('/', createPost);

// CRUD - Update a product - PUT
postsRouter.put('/:id', updatePost);

// CRUD - Delete a product - DELETE
postsRouter.delete('/:id', deletePost);

module.exports = { postsRouter };