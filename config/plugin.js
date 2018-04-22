'use strict';
const path = require('path');
// had enabled by egg
// exports.static = true;

// 客户端检测插件（自定义）
exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};
// mysql插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 验证插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
// socket.io插件
exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
// redis插件
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

// restful插件
exports.rest = {
  enable: true,
  package: 'egg-rest',
};
