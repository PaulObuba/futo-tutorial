const mongoose = require('mongoose');

const adminLoginSchema = mongoose.Schema({
    username: String,
    password: String
})

exports.AdminLogin = mongoose.model('AdminLogin', adminLoginSchema)