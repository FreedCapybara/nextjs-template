const path = require('path');
//const apiBaseUrl = require('./src/app/api-base');
const { webpack } = require('next/dist/compiled/webpack/webpack');

module.exports = {
  reactStrictMode: true,
  pageExtensions: [
    'page.js',
    'page.ts',
    'page.jsx',
    'page.tsx',
    'api.js',
    'api.ts',
    'api.jsx',
    'api.tsx'
  ],
  webpack: config => {

    // path aliases
    config.resolve.alias['@app'] = path.resolve(__dirname + '/src/app');
    config.resolve.alias['@common'] = path.resolve(__dirname + '/src/common');
    config.resolve.alias['@components'] = path.resolve(__dirname + '/src/common/components');
    config.resolve.alias['@hooks'] = path.resolve(__dirname + '/src/common/hooks');
    config.resolve.alias['@utils'] = path.resolve(__dirname + '/src/common/utils');
    config.resolve.alias['@features'] = path.resolve(__dirname + '/src/features');
    config.resolve.alias['@pages'] = path.resolve(__dirname + '/src/pages');
    config.resolve.alias['@public'] = path.resolve(__dirname + '/public');
    config.resolve.alias['@styles'] = path.resolve(__dirname + '/src/styles');

    // remove moment.js locales
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }));

    // camel-case style names from css modules
    // see https://github.com/vercel/next.js/discussions/11267
    config.module.rules
      .find(({ oneOf }) => !!oneOf).oneOf
      .filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((accumulator, { use }) => accumulator.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = 'camelCase';
        }
      });

    return config;
  },
  // replace with .env files?
  //publicRuntimeConfig: {
    //apiBaseUrl
  //}
};

