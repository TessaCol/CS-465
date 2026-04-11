const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsFindById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.tripId);
        res.json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsCreate = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindById,
    tripsCreate
};