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
                res.status(400).json(err.message)
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
                res.status(400).json(err.message)
            })
    }

    
}