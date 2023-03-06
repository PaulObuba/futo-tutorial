const express = require("express");
const router = express.Router();

const { UserLogin } = require("../models/userLogin");
const { AdminLogin } = require("../models/adminLogin");



// Get Data
router.get("/", async (req, res) => {
  res.render("login");
});

// Post Data
router.post("/", async (req, res) => {
  const { username, password } = req.body;

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
    req.session.isAuth = true;
    res.redirect("home");
  } else if (loginAsAdmin) {
    req.session.isAuth = true;
    res.redirect("/api/v1/admin");
  } else {
    res.redirect("/");
  }
});

// ADD USER
// router.post("/user", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPsw = await bcrypt.hash(password, 10)

//   const user = new UserLogin({
//     username,
//     password: hashedPsw,
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
