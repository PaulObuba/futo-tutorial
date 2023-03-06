const express = require('express');
const router = express.Router();
const isAuth = require('../is-auth');


router.get('/', isAuth, (req, res) => {
   res.render('home')
});


module.exports = router;


// req.session.destroy((err) => {
//    if (err) throw err;
//    res.redirect("/login");
//  });