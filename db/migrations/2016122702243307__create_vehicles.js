'use strict';

const Nodal = require('nodal');

class CreateVehicles extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016122702243307;
  }

  up() {

    return [
      this.createTable("vehicles", [{"name":"user_id","type":"int"},{"name":"vin","type":"string"},{"name":"plate","type":"string"},{"name":"make","type":"string"},{"name":"model","type":"string"},{"name":"year","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("vehicles")
    ];

  }

}

module.exports = CreateVehicles;
