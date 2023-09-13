const { products } = require('../config/db.js');
const {
    _getAllProducts,
    _getProductById,
    _searchProduct,
    _insertProduct,
    _updateProduct,
    _deleteProduct,
} = require('../models/products.model.js');

const getAllProducts = (req, res) => {
    _getAllProducts()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({ msg: 'Not found' })
        });
};

const searchProduct = async (req, res) => {
    try {
        const productName = req.query.name;
        const data = await _searchProduct(productName);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'Product not found' })
    }
};

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await _getProductById(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'No product match this id' })
    }
};

const createProduct = async (req, res) => {
    try {
        const data = await _insertProduct(req.body);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _updateProduct(req.body, id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await _deleteProduct(id);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message });
    }
};

module.exports = {
    getAllProducts,
    searchProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};