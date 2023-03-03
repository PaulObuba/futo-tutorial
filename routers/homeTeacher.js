const express = require("express");
const router = express.Router();

const { Teachers } = require("../models/teachers");

router.get("/", async (req, res) => {
  const teachers = await Teachers.find();

  res.render("homeTeacher", { teachers });
});

module.exports = router;
