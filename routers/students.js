const express = require("express");
const router = express.Router();

const { Students } = require("../models/students");

// Get Data
router.get("/", async (req, res) => {
  const students = await Students.find();

  if (!students) {
    res.status(500).json({ success: false });
  }
  res.render('students', { students });

  // res.send(students);
});

// Post Data
router.post("/", (req, res) => {
  const student = new Students({
    title: req.body.title,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    links: req.body.links,
  });

  student
    .save()
    .then((student) => {
      res.status(201).json(student);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

module.exports = router;
