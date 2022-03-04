module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'warn',
    eqeqeq: 'warn', // 使用全等号
    'prefer-const': 'error', // 使用const优先
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-func-assign': 'error',
    'no-implicit-coercion': 'error',
    'arrow-parens': ['error', 'always'], //今天函数一个参数也需要加括号
    semi: ['error', 'always'],
    'object-shorthand': 'error'
  }
};
