const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

require('./app_server/models/db');
require('./app_api/models/trips');

const indexRouter = require('./app_server/routes/index');
const tripRouter = require('./app_server/routes/trip');
const apiRouter = require('./app_api/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', indexRouter);
app.use('/trips', tripRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});