'use strict';

const Nodal = require('nodal');

const User = Nodal.require('app/models/user.js');
const Vehicle = Nodal.require('app/models/vehicle.js');
Vehicle.joinsTo(User, { multiple: true });



/* Include this file to enable Model relationships */

/* For example...

  const Post = Nodal.require('app/models/post.js');
  const Comment = Nodal.require('app/models/comment.js');

  Comment.joinsTo(Post, {multiple: true});

*/

module.exports = {}; // Don't need to export anything
