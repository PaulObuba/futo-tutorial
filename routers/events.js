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

const { Events } = require("../models/events");

// Get Request
router.get("/", async (req, res) => {
  const events = await Events.find();

  if (!events) {
    res.status(500).json({ success: false });
  }
  res.render("events", { events });

  // res.send(events);
});

// Post Data
router.post("/", upload.single("eventImage"), async (req, res) => {
  const events = new Events({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    image: req.file.path,
  });

  events
    .save()
    .then((event) => {
      res.status(201);
      res.redirect("./events");
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
  Events.findByIdAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log("Something went wrong in deleting data");
    } else {
      console.log("Data Deleted Successfully");
      res.redirect("/api/v1/events");
    }
  });
});

// Update Data
router.post("/edit/:id", (req, res) => {
  Events.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        console.log("Something went wrong in updating data " + err);
      } else {
        console.log("Data Updated Successfully");

        res.redirect("/api/v1/events");
      }
    }
  );
});


module.exports = router;
