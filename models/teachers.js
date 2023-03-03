const mongoose = require("mongoose");

const teachersSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },

  name: {
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

exports.Teachers = mongoose.model("Teachers", teachersSchema);
