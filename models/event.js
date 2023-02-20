const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
    require: true,
  },

  description: {
    type: String,
    default: "",
    require: true,
  },

  image: {
    type: String,
    require: true,
  },
});

exports.Events = mongoose.model("Events", eventSchema);
