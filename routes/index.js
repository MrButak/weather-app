var express = require('express');
var router = express.Router();
const index = require('../controllers/index')


router.get('/', index.index);

// POST route for city search
router.post('/searchcity', index.searchCity);

// POST route for country search
router.post('/searchcountry', index.searchCountry);
module.exports = router;
