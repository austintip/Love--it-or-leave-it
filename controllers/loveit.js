const express = require('express');
const router = express.Router();

router.get('/foods', (req, res) => {
    res.render('loveit/foods', {foods: ['thai', 'vietnamese', 'chinese']});
});

router.get('/animals', (req, res) => {
    res.render('loveit/animals', {animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;
