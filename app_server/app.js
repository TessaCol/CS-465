const express = require('express');
const path = require('path');
const hbs = require('hbs');
const indexRouter = require('./app_server/routes/index');

const app = express();
const port = 3000;

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use router
app.use('/', indexRouter);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});