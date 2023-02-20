const express = require("express");
const router = express.Router();

const { Events } = require("../models/event");

// Get Request
router.get("/", async (req, res) => {
  const events = await Events.find();

  if (!events) {
    res.status(500).json({ success: false });
  }

  res.send(events);
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
      res.status(201).json(event);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});
