const express = require("express");
const router = express.Router();

const { Students } = require("../models/students");

router.get("/", async (req, res) => {
  const students = await Students.find();

  res.render("homeStudent" , { students });
});

module.exports = router;
