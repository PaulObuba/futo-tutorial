const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   res.render('homeCourses')
});


module.exports = router;