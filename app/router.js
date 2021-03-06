'use strict';

const Nodal = require('nodal');
const router = new Nodal.Router();

const relationships = Nodal.require('app/relationships.js')

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const V1VehiclesController = Nodal.require('app/controllers/v1/vehicles_controller.js');
const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
const V1AccessTokensController = Nodal.require('app/controllers/v1/access_tokens_controller.js');
const V1MessagesController = Nodal.require('app/controllers/v1/messages_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/v1/vehicles/{id}').use(V1VehiclesController);
router.route('/v1/users/{id}').use(V1UsersController);
router.route('/v1/access_tokens/{id}').use(V1AccessTokensController);
router.route('/v1/messages/{id}').use(V1MessagesController);

/* generator: end routes */

module.exports = router;
