const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

// See https://remysharp.com/2019/11/04/nice-imports-with-nextjs
module.exports = {
  webpack: config => {
    config.resolve.alias['@components'] = path.resolve(__dirname + '/components');
    config.resolve.alias['@pages'] = path.resolve(__dirname + '/pages');
    config.resolve.alias['@public'] = path.resolve(__dirname + '/public');
    config.resolve.alias['@lang'] = path.resolve(__dirname + '/lang');
    config.resolve.alias['@lib'] = path.resolve(__dirname + '/lib');
    config.resolve.alias['@redux'] = path.resolve(__dirname + '/redux');
    config.resolve.alias['@config'] = path.resolve(__dirname + '/config');
    return config;
  },
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || (dev ? 'https://localhost:3000' : 'https://prod-url')
  }
};
