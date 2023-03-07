const express = require('express');
const router = express.Router();
const userAuth = require('../login-auth');

const { Notification } = require('../models/notification');


router.get('/', userAuth, async (req, res) => {
   const notification = await Notification.find();
   res.render('home', { notification })
});


module.exports = router;