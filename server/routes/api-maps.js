var express = require('express');
var router = express.Router();

const ApiMapsController = require('../controllers/api-maps.js');

/* GET users listing. */
router.get('/predictions/:input', ApiMapsController.predictions);
router.get('/detail/:place_id', ApiMapsController.detail);

module.exports = router;
