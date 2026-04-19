const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const authController = require('../controllers/authentication');
const verifyJWT = require('../middleware/verifyJWT');

router.post('/login', authController.login);

router.get('/trips', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching trips' });
    }
});

router.post('/trips', verifyJWT, async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body);

        const trip = new Trip(req.body);
        const savedTrip = await trip.save();

        res.status(201).json(savedTrip);

    } catch (err) {
        console.log("ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

router.delete('/trips/:id', verifyJWT, async (req, res) => {
    try {
        const deletedTrip = await Trip.findByIdAndDelete(req.params.id);

        if (!deletedTrip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.json({ message: 'Trip deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting trip' });
    }
});

module.exports = router;