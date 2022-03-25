const path = require('path');
const apiBaseUrl = require('./config/api-base.config');
const { webpack } = require('next/dist/compiled/webpack/webpack');

module.exports = {
  reactStrictMode: true,
  webpack: config => {

    // path aliases
    config.resolve.alias['@components'] = path.resolve(__dirname + '/components');
    config.resolve.alias['@pages'] = path.resolve(__dirname + '/pages');
    config.resolve.alias['@public'] = path.resolve(__dirname + '/public');
    config.resolve.alias['@lib'] = path.resolve(__dirname + '/lib');
    config.resolve.alias['@styles'] = path.resolve(__dirname + '/styles');
    config.resolve.alias['@redux'] = path.resolve(__dirname + '/redux');
    config.resolve.alias['@config'] = path.resolve(__dirname + '/config');

    // remove moment.js locales
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }));

    return config;
  },
  // replace with .env files?
  //publicRuntimeConfig: {
    //apiBaseUrl
  //}
};

