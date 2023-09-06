const express = require('express');
const router = express.Router();

const books = [];

// Get all books items
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(books);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex((book) => book.id == bookId);

    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    books[index] = {
        id: bookId,
        title,
        author
    };

    res.json(books);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex((book) => book.id == bookId);

    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(index, 1);

    res.json(books);
});

module.exports = { router };