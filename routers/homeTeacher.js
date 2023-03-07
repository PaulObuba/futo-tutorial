const express = require("express");
const router = express.Router();
const userAuth = require('../login-auth');

const { Teachers } = require("../models/teachers");

router.get("/", userAuth, async (req, res) => {
  const teachers = await Teachers.find();

  res.render("homeTeacher", { teachers });
});

module.exports = router;
