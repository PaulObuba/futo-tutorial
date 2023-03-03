const express = require('express');
const router = express.Router();

const { Notification } = require('../models/notification');

router.get('/', async (req, res) => {
   const notifications = await Notification.find();

   res.render('homeNotification', { notifications })
});


module.exports = router;