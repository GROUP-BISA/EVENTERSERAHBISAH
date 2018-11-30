const axios = require('axios');

class ApiMapsController {

    static predictions(req, res) {
        axios({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.input}&key=AIzaSyCJkGgB6Tur8F-rVGHtIGcVCeMOIWdwlhI&sessiontoken=1234567890`,
        })
            .then(function(resolve) {
                res.status(200).json(resolve.data);
            })
            .catch(function(reject) {
                console.log(reject);
            });
    }

    static detail(req, res) {
        axios({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/geocode/json?place_id=${req.params.place_id}&key=AIzaSyCJkGgB6Tur8F-rVGHtIGcVCeMOIWdwlhI`,
        })
            .then(function(resolve) {
                res.status(200).json(resolve.data);
            })
            .catch(function(reject) {
                console.log(reject);
            });
    }

}

module.exports = ApiMapsController;