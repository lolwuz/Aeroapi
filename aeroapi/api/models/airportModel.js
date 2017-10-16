'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AirportSchema = new Schema({
    name: {
        type: String,
        required: 'This airport has no name.'
    },
    aita: {
        type: String,
        required: 'Airports should have a aita name'
    },
    lon: {
        type: Number,
        required: 'Enter airport longitude'
    },
    lat: {
        type: Number,
        required: 'Enter airport lat'
    },
    iso: {
        type: String,
        required: 'Enter airport iso code'
    },
    status: {
        type: Number,
        required: 'Enter status: 1 is active 0 is inactive.'
    },
    size: {
        type: String,
    },
    type: {
        type: String,
        required: 'Enter airport type, eg. International Airport/Heliport'
    }
});

module.exports = mongoose.model('Airport', AirportSchema);