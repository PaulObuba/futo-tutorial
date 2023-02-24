const express = require('express');
const router = express.Router();

const { Courses } = require('../models/courses');


router.get('/', async (req, res) => {
   const courses = await Courses.find(); 

   res.render('homeCourses', { courses })
});


module.exports = router;