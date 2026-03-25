const mongoose = require('mongoose');
const Trip = require('./app_server/models/trip');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/travlr');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Mongoose connected!');

    // Create a sample trip
    const sampleTrip = new Trip({
        title: 'Summer Vacation',
        country: 'Italy',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2026-07-14'),
        activities: ['Sightseeing', 'Wine Tasting', 'Beach']
    });

    // Save it to the database
    try {
        const result = await sampleTrip.save();
        console.log('Sample trip saved:', result);
    } catch (err) {
        console.error('Error saving trip:', err);
    } finally {
        mongoose.connection.close();
    }
});