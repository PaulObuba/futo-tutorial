const express = require('express');
const router = express.Router();
const userAuth = require('../login-auth');

const { Events } = require('../models/events');
const { Notification } = require('../models/notification');

router.get('/', userAuth, async (req, res) => {
   const events = await Events.find();
   const notification = await Notification.find();

   res.render('homeEvent', { events, notification })
});


module.exports = router;