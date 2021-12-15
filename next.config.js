const path = require('path');
const apiBaseUrl = require('./config/api-base.config');

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias['@components'] = path.resolve(__dirname + '/components');
    config.resolve.alias['@pages'] = path.resolve(__dirname + '/pages');
    config.resolve.alias['@public'] = path.resolve(__dirname + '/public');
    config.resolve.alias['@lib'] = path.resolve(__dirname + '/lib');
    config.resolve.alias['@styles'] = path.resolve(__dirname + '/styles');
    config.resolve.alias['@redux'] = path.resolve(__dirname + '/redux');
    config.resolve.alias['@config'] = path.resolve(__dirname + '/config');
    return config;
  },
  // replace with .env files?
  //publicRuntimeConfig: {
    //apiBaseUrl
  //}
};

