const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsFindById = async (req, res) => {
    const tripId = req.params.tripId;

    if (!mongoose.Types.ObjectId.isValid(tripId)) {
        return res.status(400).json({
            message: "Invalid trip ID"
        });
    }

    try {
        const trip = await Trip.findById(tripId);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        res.status(200).json(trip);
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