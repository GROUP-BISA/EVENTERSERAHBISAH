const User = require('../models/user.js');
const encryptPassword = require('../helpers/encrypt-password.js');
const token = require('../helpers/token.js');

class UserController {

    static register(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: encryptPassword.getEncrypt(req.body.password),
            isGoogle: false
        })
            .then(function(resolve) {
                res.status(201).json(resolve);
            })
            .catch(function(reject) {
                res.status(500).json(reject);
            });
    }

    static login(req, res) {
        User.findOne({
            email: req.body.email,
            password: encryptPassword.getEncrypt(req.body.password),
        })
            .then(function(resolve) {
                const data = {
                    name: resolve.name,
                    email: resolve.email,
                }
                res.status(201).json({token: token.getToken(data)});
            })
            .catch(function(reject) {
                res.status(500).json(reject);
            });
    }

}

module.exports = UserController;