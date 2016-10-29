
// require the npm packages

// var $ = jQuery = require('jquery')(window);

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// tell node we're creating an express server
var app = express();
// set the port
var PORT = process.env.PORT || 3000;

// take the info posted in our application so it can be understood in JS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// set up the routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// set up the listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
