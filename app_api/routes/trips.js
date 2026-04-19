const express = require('express');
const router = express.Router();

const verifyJWT = require('../middleware/verifyJWT');
const tripsController = require('../controllers/tripsController');

router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripId', tripsController.tripsFindById);

router.post('/trips', verifyJWT, tripsController.tripsCreate);

module.exports = router;