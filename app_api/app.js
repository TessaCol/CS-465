const express = require('express');
const app = express();
const mongoose = require('mongoose');

const tripsRoutes = require('./routes/trips');
const authRoutes = require('./routes/auth');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/travlr')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', authRoutes);
app.use('/api', tripsRoutes);

module.exports = app;