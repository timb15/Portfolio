const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

//Renders the about page 
router.get('/', (req, res) => {
    res.render('about', {projects});
});

module.exports = router;
