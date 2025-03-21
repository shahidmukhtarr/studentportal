const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: { type: String, required: true }, 
   address: { type: String, required: true },
   password: { type: String, required: true },
   studentID: { type: String, required: true },
   fathername: { type: String, required: true},
   phone: { type: String, required: true },
});

module.exports = mongoose.model('Student', userSchema);
