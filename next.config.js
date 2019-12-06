const path = require('path');

// See https://remysharp.com/2019/11/04/nice-imports-with-nextjs
module.exports = {
  webpack: config => {
    config.resolve.alias['@components'] = path.resolve(__dirname + '/components');
    config.resolve.alias['@pages'] = path.resolve(__dirname + '/pages');
    config.resolve.alias['@public'] = path.resolve(__dirname + '/public');
    config.resolve.alias['@lang'] = path.resolve(__dirname + '/lang');
    config.resolve.alias['@lib'] = path.resolve(__dirname + '/lib');
    return config;
  }
};
