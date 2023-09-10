const {
    _getAllBooks,
    _getBookById,
    _insertBook,
    _updateBook,
    _deleteBook,
} = require('../models/books.model.js');

const getAllBooks = async (req, res) => {
    try {
        const data = await _getAllBooks();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'Not found' });
    }
};

const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await _getBookById(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'No book match this id' })
    }
};

const createBook = async (req, res) => {
    try {
        const data = await _insertBook(req.body);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _updateBook(req.body, id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deleteBook(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};