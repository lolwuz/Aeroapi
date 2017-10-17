var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
morgan = require('morgan'),
Airliner = require('./api/models/airlinerModel'), //created model loading here
Airport = require('./api/models/airportModel'), //created model loading here
Plane = require('./api/models/planeModel'),
User = require('./api/routes/userRoutes'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/airliner'); 

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use('/users', routes);

var airlinerRoutes = require('./api/routes/airlinerRoutes'); //importing route
airlinerRoutes(app); //register the route

var airportRoutes = require('./api/routes/airportRoutes'); //importing route
airportRoutes(app); //register the route

var planeRoutes = require('./api/routes/planeRoutes'); //importing route
planeRoutes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);