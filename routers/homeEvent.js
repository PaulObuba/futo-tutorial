const express = require('express');
const router = express.Router();

const { Events } = require('../models/events');

router.get('/', async (req, res) => {
   const events = await Events.find();

   res.render('homeEvent', { events })
});


module.exports = router;