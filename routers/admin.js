const express = require("express");
const router = express.Router();
const adminAuth = require('../admin-auth');

const { UserLogin } = require("../models/userLogin");
const { AdminLogin } = require("../models/adminLogin");
const { Courses } = require("../models/courses");
const { Events } = require("../models/events");
const { Students } = require("../models/students");
const { Teachers } = require("../models/teachers");
const { Notification } = require("../models/notification");


router.get("/", adminAuth, async (req, res) => {
  const user = await UserLogin.find();
  const admin = await AdminLogin.find();
  const courses = await Courses.find();
  const events = await Events.find();
  const students = await Students.find();
  const teachers = await Teachers.find();
  const notifications = await Notification.find();

  if (!user || !admin) {
    res.status(500).json({ success: false });
  }

  res.render("admin", {
    user,
    admin,
    courses,
    events,
    students,
    teachers,
    notifications,
  });
});

module.exports = router;
