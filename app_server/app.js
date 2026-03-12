var express = require('express');
var path = require('path');
var hbs = require('hbs');

var indexRouter = require('./app_server/routes/index');

var app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(function (req, res, next) {
	res.status(404).send('Page not found');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Server running on port ' + port);
});