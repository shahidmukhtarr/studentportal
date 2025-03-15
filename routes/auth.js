const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();


router.get('/register', (req, res) => {
   res.render('register');
});

router.post('/register', async (req, res) => {
   const { name, address, fathername, phone, password, studentID } = req.body;
   const existingUser = await User.findOne({ studentID });
   

   if (existingUser) {
      
      return res.status(400).json( { message: 'Student Already Exists'});
   }
   const hashedPassword = await bcrypt.hash(password, 10);
   const user = new User({ name, address, phone, fathername, password: hashedPassword, studentID });
   await user.save();
 
   return res.redirect('login');
});


router.get('/login', (req, res) => {
   res.render('login');
});

router.post('/login', async (req, res) => {
   const { password, studentID } = req.body;
   const user = await User.findOne({ studentID });

   if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      res.redirect('/dashboard');
   } else {
      res.status(400).json({ message: 'Invalid Student ID or password'});
   }
});

router.get('/reset', (req, res) => {
   res.render('reset');
});

router.post('/reset' , async(req,res) => {
   const { studentID, confirmpassword, newpassword } = req.body;

 

   if(!newpassword || !confirmpassword) {
      return res.status(400).json({ message: 'Passwords Do Not Match!'});
   }

   try {

      const user = await User.findOne({ studentID });

      if(!user){
         return res.status(400).json({ message: 'User Not Found!'})
      }


      const hashedPassword = await bcrypt.hash(newpassword, 10);

      user.password=hashedPassword;
      await user.save();

      res.status(200).send('Password Reset Successfully!')   
   } catch (error) {
      res.status(500).send('Server Error!')
   }

});

module.exports = router;