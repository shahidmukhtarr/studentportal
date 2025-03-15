const express = require('express'); 
const router = express.Router();
   

router.get('/', (req, res) => {

   if (!req.session.user) return res.redirect('/auth/login'); 

   res.render('dashboard', { name: req.session.user.name, phone: req.session.user.phone, address: req.session.user.address, fathername: req.session.user.fathername, studentID: req.session.user.studentID , course1: req.session.user.course1, course2: req.session.user.course2, course3: req.session.user.course3, course4: req.session.user.course4 }); 
});





router.get('/logout', (req, res) => {
   req.session.destroy();
   res.redirect('/auth/login'); 
});

module.exports = router;
