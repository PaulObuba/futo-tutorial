const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    name: String,
    image: String,
    church: String
  });
  
  exports.Login = mongoose.model("Login", loginSchema);