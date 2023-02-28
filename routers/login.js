const express = require("express");
const router = express.Router();

const { Login } = require("../models/login");

// Get Data
router.get("/", async (req, res) => {
  const users = await Login.find();

  if (!users) {
    res.status(500).json({ success: false });
  }

  res.render("login", { users });
  // res.send(users)
});

// Post Data
router.post("/", (req, res) => {

  if (req.body.username === "User") {
    res.redirect("home");
  } else if (req.body.username === "Admin") {
    res.redirect("api/v1/admin");
  } else {
    res.status(500).json({ err: "Invalid Username or Password" });
  }
});

module.exports = router;
