'use strict';

// Dependencies
var express = require('express');
var app = express();
var cors = require('cors')
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

// Schemas
var Airliner = require('./api/models/airlinerModel'); //created model loading here
var Airport = require('./api/models/airportModel'); //created model loading here
var Plane = require('./api/models/planeModel');
var Route = require('./api/models/routeModel'); //created model loading here

// Extra Docs and auth
var docs = require("express-mongoose-docs");
var bodyParser = require('body-parser');
var jsonwebtoken = require('jsonwebtoken');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/airliner'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use(function(req, res, next){
    if(req.header && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode){
            if(err) req.airliner = undefined;
            req.airliner = decode;
            next();
        });
    }else{
        req.airliner = undefined;
        next();
    }
});

var routeRoutes = require('./api/routes/routeRoutes'); //importing route
routeRoutes(app); //register the route
  
var airlinerRoutes = require('./api/routes/airlinerRoutes'); //importing route
airlinerRoutes(app); //register the route

var airportRoutes = require('./api/routes/airportRoutes'); //importing route
airportRoutes(app); //register the route

var planeRoutes = require('./api/routes/planeRoutes'); //importing route
planeRoutes(app); //register the route

docs(app, mongoose); // 2nd param is optional
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);