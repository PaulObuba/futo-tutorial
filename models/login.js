const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
  username: String,
  password: String
  });
  
  exports.Login = mongoose.model("Login", loginSchema);