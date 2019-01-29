const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;


//renders the project list page
router.get('/', (req, res) => {
    res.render('allprojects', { projects });
});

module.exports = router;
