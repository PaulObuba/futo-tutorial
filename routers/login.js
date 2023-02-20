const express = require("express");
const router = express.Router();

const { Login } = require('../models/login');

router.get("/", async (req, res) => {
  const users = await Login.find();

  if (!users) {
    res.status(500).json({ success: false });
  }
  res.send(users);
  res.render('home');
});

router.post("/", (req, res) => {
  const user = new Login({
    name: req.body.name,
    image: req.body.image,
    church: req.body.church,
  });

  user
    .save()
    .then((loginUser) => {
      res.status(201).json(loginUser);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

mod