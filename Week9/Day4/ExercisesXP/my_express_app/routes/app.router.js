const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Homepage' });
});

router.get('/about', (req, res) => {
    res.json({ message: 'About Us page' });
});

module.exports = { router };