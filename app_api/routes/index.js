const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

router.get('/trips', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        console.error('GET ERROR:', err);
        res.status(500).json({ error: 'Error fetching trips' });
    }
});

router.post('/trips', async (req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        res.status(201).json(trip);
    } catch (err) {
        console.error('POST ERROR:', err);
        res.status(500).json({ error: 'Error adding trip' });
    }
});

router.delete('/trips/:id', async (req, res) => {
    try {
        const deletedTrip = await Trip.findByIdAndDelete(req.params.id);

        if (!deletedTrip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.json({ message: 'Trip deleted successfully' });
    } catch (err) {
        console.error('DELETE ERROR:', err);
        res.status(500).json({ error: 'Error deleting trip' });
    }
});

module.exports = router;