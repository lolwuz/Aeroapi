'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlaneSchema = new Schema({
    name: {
        type: String,
        required: 'This airport has no name.'
    },
    type: {
        type: String,
        required: 'Enter type of the aircraft'
    },
    price: {
        type: Number,
        required: 'This airplane should have a price'
    },
    kerosineUse: {
        type: Number,
        required: 'Amount of kerosine per km'
    },
    speed: {
        type: Number,
        required: 'enter the airplanes speed'
    }
});

module.exports = mongoose.model('Plane', PlaneSchema);