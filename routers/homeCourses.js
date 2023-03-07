const express = require("express");
const router = express.Router();
const userAuth = require('../login-auth');

const { Courses } = require("../models/courses");

router.get("/", userAuth, async (req, res) => {
  const courses = await Courses.find();

  res.render('homeCourses', { courses })
//   res.send(courses);
});

module.exports = router;
