module.exports = {
  extends: 'airbnb-base',
  overrides: [{
    files: ['test/**/*.js', 'src/**/*.spec.js', 'src/**/*.test.js'],
    env: {
      mocha: true,
    },
    rules: {
      'prefer-arrow-callback': [0],
      'func-names': [0],
    },
  }],
};
