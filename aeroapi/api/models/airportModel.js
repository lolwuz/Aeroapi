'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AirportSchema = new Schema({
    code: {
        type: String
    },
    lon: {
        type: Number,
        required: "should have lon "
    },
    lat: {
        type: Number,
        required: "should have lat "
    },
    name: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    woeid: {
        type: Number
    },
    tz: {
        type: String
    },
    phone: {
        type: String
    },
    type: {
        type: String
    },
    email: {
        type: String
    },
    url: {
        type: String
    },
    runway_length: {
        type: Number
    },
    elev: {
        type: Number
    },
    icao: {
        type: String
    },
    direct_flights: {
        type: Number
    },
    carriers: {
        type: Number
    }
});

module.exports = mongoose.model('Airport', AirportSchema);