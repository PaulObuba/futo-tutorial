const express = require("express");
const router = express.Router();

const { Login } = require("../models/login");

router.get("/", async (req, res) => {
  const users = await Login.find();

  if (!users) {
    res.status(500).json({ success: false });
  }

  res.render("login", { users });
  // res.send(users)
});

router.post("/", async (req, res) => {
  // check if the user exists
  const user = await Login.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user.username === req.body.username) {
    res.status(201);
    res.redirect("home");
  } else {
    res.status(500).json({ err: "Invalid Username Or Password" });
    res.redirect("/");
  }
});

module.exports = router;
