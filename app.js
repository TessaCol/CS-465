const express = require('express');
const path = require('path');
const hbs = require('hbs');
const indexRouter = require('./app_server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});