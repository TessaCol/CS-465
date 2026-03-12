var express = require('express');
var router = express.Router();
var ctrlTravlr = require('../controllers/travlr');

router.get('/', ctrlTravlr.home);

module.exports = router;