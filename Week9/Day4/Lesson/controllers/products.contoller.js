const { products } = require('../config/db.js');

const getAllProducts = (req, res) => {
    res.json(products);
};

const searchProduct = (req, res) => {
    const productName = req.query.name;
    const filteredProducts = products.filter(item => {
        return item.name.toLowerCase().includes(productName.toLowerCase());
    });

    if (filteredProducts.length === 0) {
        return res.status(200).json({ message: 'No matched to your search' });
    }
    res.json(filteredProducts);
};

const getProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find(item => item.id == id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

const createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.json(products);
};

const updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;

    const product = products.find(item => item.id == id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name;
    product.price = price;

    res.json(products);
};

const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const index = products.findIndex(item => item.id == productId);

    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    products.splice(index, 1);
    res.json(products);
};

module.exports = {
    getAllProducts,
    searchProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};