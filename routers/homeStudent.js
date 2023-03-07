const express = require("express");
const router = express.Router();
const userAuth = require('../login-auth');

const { Students } = require("../models/students");
const { Notification } = require('../models/notification');

router.get("/", userAuth, async (req, res) => {
  const students = await Students.find();
  const notification = await Notification.find();

  res.render("homeStudent" , { students, notification });
});

module.exports = router;
