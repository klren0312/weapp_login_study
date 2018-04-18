'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.index);
  router.get('/user/:id/:name', controller.user.info);
  router.get('/search', controller.search.index);
  router.get('/npm', controller.npm.index);
  router.get('/getinfo', controller.npm.get);
  router.get('/postinfo', controller.npm.post);
  router.get('/getdata', controller.mysql.index);
  router.post('/weapp', controller.weapp.login);
};
