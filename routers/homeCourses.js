const express = require("express");
const router = express.Router();
const isAuth = require('../is-auth');

const { Courses } = require("../models/courses");

router.get("/", isAuth, async (req, res) => {
  const courses = await Courses.find();

  res.render('homeCourses', { courses })
//   res.send(courses);
});

module.exports = router;
