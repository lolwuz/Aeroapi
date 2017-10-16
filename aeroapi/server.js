var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Airliner = require('./api/models/airlinerModel'), //created model loading here
Airport = require('./api/models/airlinerModel'), //created model loading here

bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/airliner'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var airlinerRoutes = require('./api/routes/airlinerRoutes'); //importing route
airlinerRoutes(app); //register the route

var airportRoutes = require('./api/routes/airportRoutes'); //importing route
airportRoutes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);