module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "no-async-promise-executor": 0,
    "no-misleading-character-class": 0,
    "no-useless-catch": 0,
    "no-undef": 0
  }
}
