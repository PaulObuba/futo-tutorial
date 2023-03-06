const express = require("express");
const router = express.Router();
const isAuth = require('../is-auth');

const { Students } = require("../models/students");

router.get("/", isAuth, async (req, res) => {
  const students = await Students.find();

  res.render("homeStudent" , { students });
});

module.exports = router;
