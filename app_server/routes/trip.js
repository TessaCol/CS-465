const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

// GET all trips
router.get('/', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single trip by ID
router.get('/:id', async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.json(trip);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new trip
router.post('/', async (req, res) => {
    const trip = new Trip({
        title: req.body.title,
        country: req.body.country,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        activities: req.body.activities || []
    });

    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update a trip
router.put('/:id', async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.json(trip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.json({ message: 'Trip deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;