'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523879140687_7825';
  // add your config here
  config.middleware = ['gzip','uppercase'];

  // 配置csrf为false，方便测试接口
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*']
  };
  // 配置mysql
  config.mysql = {
    client: {
      host: '118.89.188.40',
      port: '3306',
      user: 'root',
      password: 'klren0312',
      database:'nodemysql'
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
    }
  };
  // 配置socket.io
  config.io = {
    init: {
      wsEngine: 'uws',
    }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },
    },
    redis: {
      host:'127.0.0.1',
      port:6379
    }
  };
  return config;
};
