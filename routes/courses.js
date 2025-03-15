const express = require('express');
const User = require('../models/Courses');
const Courses = require('../models/Courses');
const router = express.Router();

router.post('/register',  async ( req , res ) => {

    const { course1, course2, course3, course4 } = req.body;
 
    const existingCourses = await Courses.findOne({ course1, course2, course3, course4 });
 
    if(existingCourses)
    {
       return  res.status(400).json({ message: 'Courses Already Registered!'})
    }
 
    else {
 
    const user = new Courses({ course1, course2, course3, course4 });
    await user.save();
    }
 
   return res.status(200).json({ message: 'Successfully Registered the courses!'});
 
 
 });
 
 
 module.exports = router;
 