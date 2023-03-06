const express = require("express");
const router = express.Router();
const isAuth = require('../is-auth');

router.get("/", isAuth, (req, res) => {
  res.render("editNotification");
});

module.exports = router;