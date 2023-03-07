const express = require("express");
const router = express.Router();
const userAuth = require('../login-auth');

const { Courses } = require("../models/courses");
const { Notification } = require('../models/notification');

router.get("/", userAuth, async (req, res) => {
  const courses = await Courses.find();
  const notification = await Notification.find();

  res.render('homeCourses', { courses, notification })
//   res.send(courses);
});

module.exports = router;
