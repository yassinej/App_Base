//NPM Modules import
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

//Local ressources import
const keys = require('./config/keys');
//DB connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

//Server Setup
const app = express();

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

//handling routes
require('./routes/authRoutes')(app, passport);

//Starting server
app.listen(PORT, () => {
	console.log('Server started on PORT : ', PORT);
});
