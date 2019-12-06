module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'formatjs',
    'jsx-a11y'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  // couldn't get rule overrides to work for spec files
  // wanted no-undef off for *.spec.js
  "globals": {
    "describe": "readonly",
    "it": "readonly",
    "expect": "readonly",
    "beforeEach": "readonly",
    "afterEach": "readonly",
    "cy": "readonly"
  },
  'ignorePatterns': [
    'node_modules/',
    'cypress/integration/examples/',
    'cypress/plugins/',
    'cypress/support/'
  ],
  'rules': {
    'semi': [ 'error', 'always' ],
    'formatjs/enforce-placeholders': 'error',
    'formatjs/blacklist-elements': 'error',
    'formatjs/enforce-description': 'error',
    'formatjs/enforce-plural-rules': 'error',
    'formatjs/no-camel-case': 'error',
    'formatjs/no-emoji': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/no-offset': 'error',
    'formatjs/supported-datetime-skeleton': 'error',
    'jsx-a11y/anchor-is-valid': 'off' // the <Link><a /></Link> stuff screws this up
  }
};
