'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const gzip = app.middleware.gzip({threshold: 1024});
  const uppercase = app.middleware.uppercase();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user', controller.user.check);
  router.get('/user/:id', controller.user.index);
  router.get('/user/:id/:name', controller.user.info);
  router.get('/search', gzip, uppercase, controller.search.index);
  router.get('/npm', controller.npm.index);
  router.get('/getinfo', controller.npm.get);
  router.get('/postinfo', controller.npm.post);
  router.get('/getdata', controller.mysql.index);
  router.post('/weapp', controller.weapp.login);
  // websocket
  app.io.route('chat', app.io.controller.chat.ping);
  app.io.route('disconnect', app.io.controller.chat.disconnect);
};
