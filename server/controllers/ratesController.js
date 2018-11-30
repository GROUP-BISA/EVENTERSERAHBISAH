const axios = require('axios')

module.exports={
    allRates: function(req, res, next){
        axios({
            url: `http://data.fixer.io/api/latest?access_key=${process.env.fixerIo}`,
            method: 'get',
            headers:{
                'User-Agent': 'request'
            }
        }).then(data =>{
            res.status(200).json(data.data.rates)
        }).catch(err =>{
            res.status(500).json({
                message: "Error in getting allRates",
                details: err.response.data.message
            })
        })
    },

    convert: function(req, res, next){
        var to = req.query.to
        var from = req.query.from
        var amount = req.query.amount
        
        axios({
            url: `http://data.fixer.io/api/latest?access_key=${process.env.fixerIo}`,
            method: 'get',
            headers:{
                'User-Agent': 'request'
            }
        }).then(response =>{
            if(from === "EUR"){
                let result = response.data.rates[to] * amount
                res.status(200).json(result)
            }
            else if(to === "EUR"){
                let result = amount / response.data.rates[from]
                res.status(200).json(result)
            }
        }).catch(err =>{
            res.status(500).json({
                message:"Error in converting",
                detail: err.response.data.message
            })
        })
    }

    // convert: function(req, res, next){
    //     axios({
    //         url:`http://data.fixer.io/api/convert?access_key=${process.env.fixerIo}&from=${req.query.from}&to=${req.query.to}&amount=${req.query.amount}`,
    //         method: 'get',
    //         headers:{
    //             'User-Agent': 'request'
    //         }
    //     }).then(converted => {
    //         res.status(200).json({
    //             message: "successfully converted the currency",
    //             details: converted.data
    //         })
    //     }).catch(err =>{
    //         res.status(500).json({
    //             message: "Error in converting currency",
    //             details: err.message
    //         })
    //     })
    // }

}