const express = require('express');
const app = express();



app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

app.set('view engine', 'pug');

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoutes = require('./routes/projects');
const allProjectsRoute = require('./routes/allprojects')

app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectRoutes);
app.use('/allprojects', allProjectsRoute)

//creates a custon error message and status code
app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

//renders the error page if the page does not exist as well as logs an error message to the console
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log('The Page you are looking for was not found!');
    res.render('error');
});

//Runs the application on port:3000
app.listen(3000, () => {
    console.log('The applications is running on localhost:3000!')
});