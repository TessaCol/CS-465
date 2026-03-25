const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./app_server/models/db');

const indexRouter = require('./app_server/routes/index');
const tripRouter = require('./app_server/routes/trip');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', indexRouter);
app.use('/trips', tripRouter);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});