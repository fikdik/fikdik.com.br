module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
