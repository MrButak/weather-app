var express = require('express');
var router = express.Router();

const index = require('../controllers/index')

router.get('/', index.index);
// router.post('/');

module.exports = router;
