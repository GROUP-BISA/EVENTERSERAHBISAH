const crypto = require('crypto');

module.exports = {

    getEncrypt(password) {
        return crypto.createHmac('sha256', process.env.SECRET_PWD).update(password).digest('hex');
    }

};