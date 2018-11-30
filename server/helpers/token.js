const token = require('jsonwebtoken');

module.exports = {
    getToken(data) {
        return token.sign(data, process.env.SECRET_TOKEN);
    },

    verifToken(data) {
        return token.verify(data, process.env.SECRET_TOKEN);
    }
}