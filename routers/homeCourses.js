const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uplads/" });

const { Courses } = require("../models/courses");

router.get("/", async (req, res) => {
  const courses = await Courses.find();

  res.render('homeCourses', { courses })
//   res.send(courses);
});

// Post Data
// router.post("/", upload.single("coursesImage"), async (req, res) => {
//   console.log(req.file);
//   const course = new Courses({
   //  image: req.body.image,
//     title: req.body.title,
//     description: req.body.description,
//   });

//   course
//     .save()
//     .then(() => {
//       res.status(201);

      // res.redirect("./courses");
//       res.send(courses);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//         success: false,
//       });
//     });
// });

module.exports = router;
