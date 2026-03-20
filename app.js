const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const travelRouter = require('./routes/travel');

const app = express();
const port = 3000;

// Handlebars
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Files
app.use(express.static(path.join(__dirname, 'public')));

// Use the router
app.use('/', travelRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});