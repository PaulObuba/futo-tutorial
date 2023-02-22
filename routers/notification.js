const express = require("express");
const router = express.Router();

const { Notification } = require("../models/notification");

// Get Data
router.get("/", async (req, res) => {
  const notifications = await Notification.find();

  if (!notifications) {
    res.status(500).json({ success: false });
  }
  res.render('notification', { notifications })

  // res.send(notification);
});

// Post Data
router.post("/", (req, res) => {
  const notification = new Notification({
    title: req.body.title,
    subTitle: req.body.subTitle,
    info: req.body.info,
  });

  notification
    .save()
    .then((notification) => {
      res.status(201).json(notification);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});


module.exports = router;