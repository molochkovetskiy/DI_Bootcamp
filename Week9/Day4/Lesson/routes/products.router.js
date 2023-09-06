const express = require('express');
const { logger } = require('../middlewares/utils.js')

const {
    getAllProducts,
    searchProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products.contoller.js');

const p_router = express.Router();

// CRUD - Read - get all products
p_router.get('/', logger, getAllProducts);

// CRUD - Read - get all products - query string
p_router.get('/search', searchProduct);

// CRUD - Read - get one product
p_router.get('/:id', getProduct);

// CRUD - Create a new product - POST
p_router.post('/', createProduct);

// CRUD - Update a product - PUT
p_router.put('/:id', updateProduct);

// CRUD - Delete a product - DELETE
p_router.delete('/:id', deleteProduct);

module.exports = { p_router };