const express = require("express");
const router = express.Router();
const adminAuth = require('../admin-auth');

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

const { Teachers } = require("../models/teachers");

// Get Data
router.get("/", adminAuth, async (req, res) => {
  const teachers = await Teachers.find();

  if (!teachers) {
    res.status(500).json({ success: false });
  }
  res.render("teachers", { teachers });

  // res.send(teachers);
});

// Post Data
router.post("/", upload.single("teacherImage"), (req, res) => {
  const teachers = new Teachers({
    title: req.body.title,
    name: req.body.name,
    image: req.file.path,
    links: req.body.links,
  });

  teachers
    .save()
    .then((teacher) => {
      res.status(201);
      res.redirect("./teachers");
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
  Teachers.findByIdAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log("Something went wrong in deleting data");
    } else {
      console.log("Data Deleted Successfully");
      res.redirect("/api/v1/teachers");
    }
  });
});

// Update Data
router.post("/edit/:id", (req, res) => {
  Teachers.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        console.log("Something went wrong in updating data " + err);
      } else {
        console.log("Data Updated Successfully");

        res.redirect("/api/v1/teachers");
      }
    }
  );
});

module.exports = router;
