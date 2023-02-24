const express = require("express");
const router = express.Router();

const api = process.env.API_URL;

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
  const user = await Login.findOne();

  if (req.body.username === 'User') {
    res.redirect("home");
  } else if (req.body.username === 'Admin') {
    res.redirect(`${api}/courses`)
  } 
  else {
    res.status(500).json({ err: "Invalid Username or Password" });
    
  }
});

module.exports = router;
