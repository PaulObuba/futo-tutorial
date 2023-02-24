const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    user: String,
    password: String
  });
  
  exports.Login = mongoose.model("Login", loginSchema);