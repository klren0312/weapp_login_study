'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523879140687_7825';
  // add your config here
  config.middleware = [ 'gzip', 'uppercase', 'robot' ];
  // 配置ua检测
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  // 配置csrf为false，方便测试接口
  config.security = {
    csrf: {
      enable: false,
    },
    ignore: '/api/',
    domainWhiteList: [ '*' ],
  };
  // 配置mysql
  config.mysql = {
    client: {
      host: '118.89.188.40',
      port: '3306',
      user: 'root',
      password: 'klren0312',
      database: 'nodemysql',
    },
    app: true,
    agent: false,
  };
  // 配置redis
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };
  // 配置socket.io
  config.io = {
    init: {
      wsEngine: 'uws',
    }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ 'filter' ],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };
  // 配置rest
  config.rest = {
    urlprefix: '/api/',
    authRequest: null,
    authIgnores: null,
  };
  return config;
};
