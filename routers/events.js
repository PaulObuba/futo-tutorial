const express = require("express");
const router = express.Router();

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
router.post("/", async (req, res) => {
  const events = new Events({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    image: req.body.image,
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
