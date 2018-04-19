'use strict';

// had enabled by egg
// exports.static = true;

// mysql插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
}
// 验证插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
}
// socket.io插件
exports.io = {
  enable: true,
  package: 'egg-socket.io',
}
// redis插件
exports.redis = {
  enable: true,
  package: 'egg-redis',
}