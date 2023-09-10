const express = require('express');

const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/books.controller.js');

const booksRouter = express.Router();

// CRUD - Read - get all products
booksRouter.get('/', getAllBooks);

// CRUD - Read - get one product
booksRouter.get('/:id', getBookById);

// CRUD - Create a new product - POST
booksRouter.post('/', createBook);

// CRUD - Update a product - PUT
booksRouter.put('/:id', updateBook);

// CRUD - Delete a product - DELETE
booksRouter.delete('/:id', deleteBook);

module.exports = { booksRouter };