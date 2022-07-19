module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'prettier'
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        "singleQuote": true
      },
    ],
  },
};