'use strict';

const Nodal = require('nodal');
const AccessToken = Nodal.require('app/models/access_token.js');

class V1AccessTokensController extends Nodal.Controller {

  index() {

    AccessToken.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    AccessToken.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    AccessToken.login(this.params, (err, model) => {

       this.respond(err || model);

     });

    // AccessToken.create(this.params.body, (err, model) => {
    //
    //   this.respond(err || model);
    //
    // });

  }

  update() {

    AccessToken.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  del() {
    
    AccessToken.logout(this.params, (err, model) => {

      this.respond(err || model);

    });

    // AccessToken.logout(this.params.route.id, (err, model) => {
    //
    //   this.respond(err || model);
    //
    // });

  }

}

module.exports = V1AccessTokensController;
