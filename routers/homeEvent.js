const express = require('express');
const router = express.Router();
const isAuth = require('../is-auth');

const { Events } = require('../models/events');

router.get('/', isAuth, async (req, res) => {
   const events = await Events.find();

   res.render('homeEvent', { events })
});


module.exports = router;