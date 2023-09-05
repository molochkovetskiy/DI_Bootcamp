// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log('url=>', request.url);
//     console.log('headers=>', request.headers);
//     console.log('Getting your request on my first server');

//     if (request.url == '/') {
//         if (request.method == 'GET') {
//             // do whatever you want
//         }
//         response.end('<h1>Home</h1>');
//     }
//     else if (request.url == '/about') {
//         response.end('<h1>About</h1>');
//     }
//     else {
//         response.end('<h1>Page not found</h1>');
//     }
// });

// server.listen(5000, () => {
//     console.log('Run on port 5000');
// });


// Express server

const express = require('express');
const dotenv = require('dotenv');
const { products } = require('./config/db.js');
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Run on port ${process.env.PORT}`);
});

// CRUD - Read - get all products
app.get('/api/products', (request, response) => {
    response.json(products);
});

// CRUD - Read - get all products - query string
// api/products?name=ip
app.get('/api/products/search', (request, response) => {
    const productName = request.query.name;
    const filteredProducts = products.filter(item => {
        return item.name.toLowerCase().includes(productName.toLowerCase());
    });

    if (filteredProducts.length === 0) {
        return response.status(200).json({ message: 'No matched to your search' })
    }
    response.json(filteredProducts);
});

// CRUD - Read - get one product
// api/products/1
// params
app.get('/api/products/:id', (request, response) => {
    const id = request.params.id;
    const product = products.find(item => item.id == id);
    if (!product) {
        return response.sendStatus(404); //.json({ message: 'Product not found' });
    }
    response.json(product);
});

// body - POST/PUT
// CRUD - Create a new product - POST {"name": "iKey", "price": 750}
app.post('/api/products', (request, response) => {
    const { name, price } = request.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    response.json(products);
});

// CRUD - Update a product - PUT
// params - id of the product
// body - send a new name and a new price
app.put('/api/products/:id', (request, response) => {
    const id = request.params.id;
    const { name, price } = request.body;

    const product = products.find(item => item.id == id);
    if (!product) {
        return response.sendStatus(404);
    }

    product.name = name;
    product.price = price;

    response.json(products);
});

app.delete('/api/products/:id', (request, response) => {
    const productId = request.params.id;
    const index = products.findIndex(item => item.id == productId);

    if (index === -1) {
        return response.status(404).json({ message: 'Product not found' })
    }

    products.splice(index, 1);
    response.json(products);
});