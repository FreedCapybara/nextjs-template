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
  'parser': '@babel/eslint-parser',
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
    'jsx-a11y/anchor-is-valid': 'off' // the Next.js <Link><a /></Link> screws this up
  }
};
