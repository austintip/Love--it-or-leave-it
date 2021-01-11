const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.render('leaveit/movies', {movies: ['Grease 2', 'The Last Airbender']})
});

router.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ['AXE', 'Coca Cola']})
});

module.exports = router;