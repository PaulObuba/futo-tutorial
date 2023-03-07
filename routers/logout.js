const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;

    res.redirect("/");
  });
});

module.exports = router;
