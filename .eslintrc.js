module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'allowImportExportEverywhere': true
  },
  'plugins': [
    'react',
    'formatjs',
    'jsx-a11y',
    'security'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  // couldn't get rule overrides to work for spec files
  // wanted no-undef off for *.spec.js
  "globals": {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'describe': 'readonly',
    'it': 'readonly',
    'expect': 'readonly',
    'beforeEach': 'readonly',
    'afterEach': 'readonly',
    'cy': 'readonly',
    'spyOn': 'readonly',
    'jest': 'readonly'
  },
  'ignorePatterns': [
    'node_modules/',
    '*.config.js',
    'scripts/', // don't actally want this -- but eslint-plugin-disable isn't working for disabling some security warnings
    'cypress/integration/examples/',
    'cypress/plugins/',
    'cypress/support/'
  ],
  'rules': {
    'semi': [ 'error', 'always' ],
    'react/jsx-no-literals': 'error',
    'formatjs/enforce-placeholders': 'error',
    'formatjs/blacklist-elements': 'error',
    'formatjs/enforce-description': 'error',
    'formatjs/enforce-plural-rules': 'error',
    'formatjs/no-camel-case': 'error',
    'formatjs/no-emoji': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/no-offset': 'error',
    'formatjs/supported-datetime-skeleton': 'error',
    'jsx-a11y/anchor-is-valid': 'off' // the Next.js <Link><a /></Link> screws this up
  }
};
