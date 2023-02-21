const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  subTitle: {
    type: String,
    require: true,
  },

  info: {
    type: String,
    require: true,
  },
});

exports.Notification = mongoose.model("Notification", notificationSchema);
