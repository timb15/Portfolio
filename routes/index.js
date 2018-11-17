const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;


//renders the home page of the website
router.get('/', (req, res) => {
        res.render('index', { projects});   
});

module.exports = router;
