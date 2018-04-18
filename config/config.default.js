'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523879140687_7825';
  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*']
  };
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
  }
  return config;
};
