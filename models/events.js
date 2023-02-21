const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: new Date().toDateString(),
  },

  description: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    require: true,
  },
});

exports.Events = mongoose.model("Events", eventSchema);
