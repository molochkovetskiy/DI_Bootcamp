const { products } = require('./products.js');

function findProduct(name) {
    const foundProduct = products.find(product => product.name == name);
    return foundProduct;
}

console.log(findProduct('apple'));