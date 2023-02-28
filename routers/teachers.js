const express = require("express");
const router = express.Router();

const { Teachers } = require("../models/teachers");

// Get Data
router.get("/", async (req, res) => {
  const teachers = await Teachers.find();

  if (!teachers) {
    res.status(500).json({ success: false });
  }
  res.render("teachers", { teachers });

  // res.send(teachers);
});

// Post Data
router.post("/", (req, res) => {
  const teachers = new Teachers({
    title: req.body.title,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
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
