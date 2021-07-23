module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
    'unicorn/no-array-reduce': 'off',
  },
};
