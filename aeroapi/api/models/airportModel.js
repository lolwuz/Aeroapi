'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AirportSchema = new Schema({
    code: {
        type: String,
        required: 'Airports should have a iata code'
    },
    lon: {
        type: Number,
        required: 'Enter airport longitude'
    },
    lat: {
        type: Number,
        required: 'Enter airport lat'
    },
    name: {
        type: String,
        required: 'This airport has no name.'
    },
    city: {
        type: String,
        required: 'Airports should have a city name'
    },
    state: {
        type: String,
        required: 'Airports should have a state'
    },
    country: {
        type: String,
        required: 'Airports should have a country name'
    },
    woeid: {
        type: String,
        required: 'Give WOEID'
    },
    tz: {
        type: String,
        required: 'Enter a Timezone'
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        required: 'Airports should have a type'
    },
    email: {
        type: String
    },
    url: {
        type: String
    },
    runway_length: {
        type: String
    },
    elev: {
        type: String,
        required: 'Airport elevation'
    },
    icao: {
        type: String,
        required: 'Airports should have a icao'
    },
    direct_flight: {
        type: String,
        required: 'Direct flights needed for landing rights'
    },
    carriers: {
        type: String
    }
});

module.exports = mongoose.model('Airport', AirportSchema);