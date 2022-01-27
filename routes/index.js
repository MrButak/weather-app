var express = require('express');
var router = express.Router();

const index = require('../controllers/index')
// index.searchCity();
router.get('/', index.index);
router.post('/', index.index);

router.post('/searchcity', index.searchCity);

module.exports = router;
