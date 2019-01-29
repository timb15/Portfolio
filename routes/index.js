const express = require('express');
const router = express.Router();


//renders the home page of the website
router.get('/', (req, res) => {
        res.render('index');
});

module.exports = router;
