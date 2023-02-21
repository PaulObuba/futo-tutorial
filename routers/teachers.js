const express = require("express");
const router = express.Router();

const { Teachers } = require("../models/teachers");

// Get Data
router.get("/", async (req, res) => {
  const teachers = await Teachers.find();

  if (!teachers) {
   res.status(500).json({success: false});
  }
  res.render('teachers', { teachers })

  // res.send(teachers);
});

// Post Data
router.post("/", (req, res) => {
  const teachers =  new Teachers({
    title: req.body.title,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    links: req.body.links
  })

  teachers.save().then(teacher => {
    res.status(201).json(teacher)
  }).catch(err => {
    res.status(500).json({
      error: err,
      success: false
    })
  })
});

module.exports = router;
