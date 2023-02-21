const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },

  name: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  image: {
    type: String,
    require: true,
  },

  links: {
    type: Array,
  },
});

exports.Students = mongoose.model("Students", studentsSchema);
