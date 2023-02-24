const express = require("express");
const router = express.Router();

const { Courses } = require("../models/courses");

// Get Data
router.get("/", async (req, res) => {
  const courses = await Courses.find();

  if (!courses) {
    res.status(500).json({ success: false });
  }

  res.render("courses", { courses });
  // res.send(courses);
});

// Post Data
router.post("/", (req, res) => {
  const course = new Courses({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
  });

  course
    .save()
    .then(() => {
      res.status(201);

      res.redirect('./courses');
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

// Delete Data
router.get("./:id", (req, res, next) => {
  Courses.findByIdAndDelete({ _id: req.params.id }, (err, docs) => {
    if (err) {
      console.log("Something went wrong in deleting data");
      next(err);
    } else {
      console.log("Deleted Successfully");
      res.redirect("./courses");
    }
  });
});

module.exports = router;
