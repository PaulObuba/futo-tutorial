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
router.post("/", upload.single("studentImage"), (req, res) => {
  const student = new Students({
    title: req.body.title,
    name: req.body.name,
    image: req.file.path,
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
      res.redirect("/api/v1/students");
    }
  });
});

// Update Data
router.post("/edit/:id", (req, res) => {
  Students.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        console.log("Something went wrong in updating data " + err);
      } else {
        console.log("Data Updated Successfully");

        res.redirect("/api/v1/students");
      }
    }
  );
});

module.exports = router;
