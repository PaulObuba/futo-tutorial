const express = require('express');
const router = express.Router();
const userAuth = require('../login-auth');


router.get('/', userAuth, (req, res) => {
   res.render('home')
});


module.exports = router;