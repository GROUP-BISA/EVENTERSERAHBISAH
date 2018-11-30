var express = require('express');
var router = express.Router();
const eventController = require('../controllers/eventController')

router.get('/', eventController.all)
router.get('/search/:keywords', eventController.search)
router.get('/venue/:venueId', eventController.getVenue)
router.get('/organizer/:organizerId', eventController.getOrganizer)

module.exports = router