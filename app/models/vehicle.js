'use strict';

const Nodal = require('nodal');

class Vehicle extends Nodal.Model {}

Vehicle.setDatabase(Nodal.require('db/main.js'));
Vehicle.setSchema(Nodal.my.Schema.models.Vehicle);

module.exports = Vehicle;
