const axios = require('axios')

module.exports = {
    all: function(req, res, next) {
        let options = {
            method: 'GET',
            url: `https://www.eventbriteapi.com/v3/events/?token=${process.env.eventbriteToken}`
        }
        axios(options)
            .then(events => {
                res.status(200).json(events.data)
            })
            .catch(err => {
                res.status(400).json(err.response.data.message)
            })
    },

    search: function(req, res, next) {
        let options = {
            method: 'GET',
            url: `https://www.eventbriteapi.com/v3/events/search/?token=${process.env.eventbriteToken}&q=${req.params.keywords}`
        }
        axios(options)
            .then(events => {
                res.status(200).json(events.data)
            })
            .catch(err => {
                res.status(400).json(err.response.data.message)
            })
    },

    getVenue: function(req, res, next) {
        let options = {
            method: 'GET',
            url: `https://www.eventbriteapi.com/v3/venues/${req.params.venueId}/?token=${process.env.eventbriteToken}`
        }
        axios(options)
            .then(venue => {
                res.status(200).json(venue.data)
            })
            .catch(err => {
                res.status(400).json(err.response.data.message)
            })
    },

    getOrganizer: function(req, res, next) {
        let options = {
            method: 'GET',
            url: `https://www.eventbriteapi.com/v3/organizers/${req.params.organizerId}/?token=${process.env.eventbriteToken}`
        }
        axios(options)
            .then(organizer => {
                res.status(200).json(organizer.data)
            }) 
            .catch(err => {
                res.status(400).json(err.response.data.message)
            })
    }
}