var express = require('express');
var router = express.Router();
const {allRates, convert} = require('../controllers/ratesController')

/* GET users listing. */
router.get('/', allRates);
router.post('/convert', convert)
module.exports = router;
