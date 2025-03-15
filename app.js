const express = require('express');
const session = require('express-session');
const path = require('path');  
require('./database/db');  


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/courses', require('./routes/courses'));

// Start server
app.listen(2000, () => {
    console.log('Server is running on port 2000');
});
