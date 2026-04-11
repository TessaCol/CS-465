const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
	title: { type: String, required: true },
	country: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	activities: { type: [String], default: [] }
});

module.exports = mongoose.model('trips', tripSchema);