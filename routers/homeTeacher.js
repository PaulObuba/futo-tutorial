const express = require("express");
const router = express.Router();
const isAuth = require('../is-auth');

const { Teachers } = require("../models/teachers");

router.get("/", isAuth, async (req, res) => {
  const teachers = await Teachers.find();

  res.render("homeTeacher", { teachers });
});

module.exports = router;
