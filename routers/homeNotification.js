const express = require('express');
const router = express.Router();
const isAuth = require('../is-auth');

const { Notification } = require('../models/notification');

router.get('/', isAuth, async (req, res) => {
   const notifications = await Notification.find();

   res.render('homeNotification', { notifications })
});


module.exports = router;