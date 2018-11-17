const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

//redirects to the first project page if someone trys to go to the projects url without an id entered
router.get('/', (req, res) => {
    res.redirect(`/projects/0`);
});

//dynamically renders a project page based on the id of the project
router.get('/:id',(req, res) => {
    const id = parseFloat(req.params.id);
    const project = projects[id]
    const techs = project.technologies;
    const imgs = project.img_urls;

    res.render('project', { project, techs, imgs });
});

module.exports = router;