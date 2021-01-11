const express = require('express')
const app = express();
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use('/loveit', require('./controllers/loveit'));
app.use('/leaveit', require('./controllers/leaveit'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/loveit/animals', (req, res) => {
    res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

app.get('/loveit/foods', (req, res) => {
    res.render('foods', {foods: ['thai', 'vietnamese', 'chinese']})
});

app.get('/leaveit/movies', (req, res) => {
    res.render('movies', {movies: ['Grease 2', 'The Last Airbender']})
});

app.get('/leaveit/products', (req, res) => {
    res.render('products', {products: ['AXE', 'Coca Cola']})
});

app.listen(8000);