const express = require("express");
const router = express.Router();

// Configure Multer for Uploading Image File
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5,
  // },
  // fileFilter: fileFilter,
});

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
router.post("/", upload.single("courseImage"), (req, res) => {
  console.log(req.file);

  // res.redirect("/courses");

  const course = new Courses({
    image: req.file.path,
    title: req.body.title,
    description: req.body.description,
  });

  course
    .save()
    .then(() => {
      res.status(201);

      res.redirect("./courses");
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

// Delete Data
router.get("/:id", (req, res, next) => {
  Courses.findByIdAndDelete({ _id: req.params.id }, (err, docs) => {
    if (err) {
      console.log("Something went wrong in deleting data");
      next(err);
    } else {
      console.log("Deleted Successfully");
      res.redirect("/api/v1/courses");
    }
  });
});

// Update Data
router.post("/edit/:id", upload.single("courseImage"), (req, res) => {
  Courses.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        console.log("Something went wrong in updating data " + err);
      } else {
        console.log("Data Updated Successfully");

        res.redirect("/api/v1/courses");
      }
    }
  );
});

module.exports = router;
