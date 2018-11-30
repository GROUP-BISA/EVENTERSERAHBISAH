const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    },
    password: String,
    isGoogle: Boolean
}, {timestamps: true,});

const User = mongoose.model('User', userSchema);

module.exports = User;