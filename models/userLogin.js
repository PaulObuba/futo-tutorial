const mongoose = require('mongoose');

const userLoginSchema = mongoose.Schema({
  username: String,
  password: String
  });
  
  exports.UserLogin = mongoose.model("UserLogin", userLoginSchema);