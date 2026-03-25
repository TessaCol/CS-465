const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
	title: { type: String, required: true },
	country: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	activities: [String]
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;