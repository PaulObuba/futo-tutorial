const express = require("express");
const router = express.Router();
const userAuth = require('../login-auth');

const { Teachers } = require("../models/teachers");
const { Notification } = require('../models/notification');

router.get("/", userAuth, async (req, res) => {
  const teachers = await Teachers.find();
  const notification = await Notification.find();

  res.render("homeTeacher", { teachers, notification });
});

module.exports = router;
