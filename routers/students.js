const express = require("express");
const router = express.Router();

const { Students } = require("../models/students");

// Get Data
router.get("/", async (req, res) => {
  const students = await Students.find();

  if (!students) {
    res.status(500).json({ success: false });
  }
  res.render("students", { students });

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
      res.status(201);
      res.redirect("./students");
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

// Delete Data
router.get("/:id", (req, res) => {
  Students.findByIdAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log("Something went wrong in deleting dat");
    } else {
      console.log("Data Deleted Successfully");
      res.redirect("/students");
    }
  });
});

module.exports = router;
