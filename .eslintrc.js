module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'class-methods-use-this': ['off'],
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    camelcase: ['off'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
