const express = require('express');
const router = express.Router();
const ctrlTravlr = require('../controllers/travlr');

// Home page
router.get('/', ctrlTravlr.home);

// Travel page
router.get('/travel', ctrlTravlr.travel);

module.exports = router;