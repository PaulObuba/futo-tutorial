const express = require("express");
const router = express.Router();

const { UserLogin } = require("../models/userLogin");
const { AdminLogin } = require("../models/adminLogin");

router.get("/", async (req, res) => {
  const user = await UserLogin.find();
  const admin = await AdminLogin.find();

  if (!user || !admin) {
    res.status(500).json({ success: false });
  }

  res.render("admin", { user, admin });
});

module.exports = router;
