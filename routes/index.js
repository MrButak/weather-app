var express = require('express');
var router = express.Router();
const index = require('../controllers/index')


router.get('/', index.index);

// live search POST route
router.post('/searchcity', index.searchCity);

// live search POST route
router.post('/searchcountry', index.searchCountry);
module.exports = router;
