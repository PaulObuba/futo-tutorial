const express = require("express");
const router = express.Router();

const { UserLogin } = require("../models/userLogin");
const { AdminLogin } = require("../models/adminLogin");

// Get Data
router.get("/", async (req, res) => {
  if (req.session.authorized) {
    res.render("home", { username: req.session.loginAsUser.username });
  } else {
    res.render("login");
  }

  // res.send();
});

// Post Data
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(500).json({ error: "Please add all the fields" });
  }

  //  Check if User Or Admin login exist
  const loginAsUser = await UserLogin.findOne({
    username: username,
    password: password,
  });
  const loginAsAdmin = await AdminLogin.findOne({
    username: username,
    password: password,
  });

  if (loginAsUser) {
    req.session.loginAsUser = loginAsUser;
    req.session.authorized = true;
    res.redirect("home");
  } else if (loginAsAdmin) {
    req.session.loginAsAdmin = loginAsAdmin;
    req.session.authorized = true;
    res.redirect("/api/v1/admin");
  } else {
    res.redirect("/");
  }
});

// ADD USER
// router.post("/user", (req, res) => {
//   const user = new UserLogin({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   user
//     .save()
//     .then(() => {
//       res.status(201);
//       res.send(user);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//         success: false,
//       });
//     });
// });

// UPDATE USER
router.post("/user/edit/:id", (req, res) => {
  UserLogin.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        console.log("Something went wrong in updating User Login " + err);
      } else {
        console.log("User Login Updated Successfully");
        res.redirect("/api/v1/admin");
      }
    }
  );
});

// ADD ADMIN
// router.post("/admin", (req, res) => {
//   const admin = new AdminLogin({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   admin
//     .save()
//     .then(() => {
//       res.status(201);
//       res.send(admin);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//         success: false,
//       });
//     });
// });

// UPDATE Admin
router.post("/admin/edit/:id", (req, res) => {
  AdminLogin.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        console.log("Something went wrong in updating User Login " + err);
      } else {
        console.log("User Login Updated Successfully");
        res.redirect("/api/v1/admin");
      }
    }
  );
});

module.exports = router;
