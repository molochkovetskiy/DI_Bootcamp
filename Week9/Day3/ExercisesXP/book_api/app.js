const express = require('express');
const dotenv = require('dotenv');
const { books } = require('./config/db.js');
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('/api/books', (request, response) => {
    response.json(books);
});

app.get('/api/books/:id', (request, response) => {
    const bookId = request.params.id;
    const book = books.find((book) => book.id == bookId);

    if (!book) {
        return response.status(404).json({ message: 'Book not found' });
    }

    response.status(200).json(book);
});

app.post('/api/books', (request, response) => {
    const { title, author, publishedYear } = request.body;

    if (!title || !author || !publishedYear) {
        return response.status(400).json({ message: 'Title, author, and publishedYear are required' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    response.status(201).json(newBook);
});