const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  // image: {
  //   type: String,
  //   require: true,
  // },
});

exports.Courses = mongoose.model('Courses', courseSchema)