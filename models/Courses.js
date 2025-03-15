const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
   course1: { type: String, required: true },
   course2: { type: String, required: true },
   course3: { type: String, required: true },
   course4: { type: String, required: true}
});

module.exports = mongoose.model('Courses', userSchema);
