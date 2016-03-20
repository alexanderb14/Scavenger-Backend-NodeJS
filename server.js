// Require modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Set up Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://nodeuser:nodepassword@olympia.modulusmongo.net:27017/y5qaJijo');

// config app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4040;

// Routes
// ------
var objectivesRoute = require('./app/routes/ObjectivesRoute');
app.use('/objectives', objectivesRoute);

var usersRoute = require('./app/routes/UsersRoute');
app.use('/users', usersRoute);

// Start Server
// ------------
app.listen(port);
console.log('Magic happens on port ' + port);