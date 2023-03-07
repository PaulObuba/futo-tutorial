const express = require('express');
const router = express.Router();
const userAuth = require('../login-auth');

const { Events } = require('../models/events');

router.get('/', userAuth, async (req, res) => {
   const events = await Events.find();

   res.render('homeEvent', { events })
});


module.exports = router;