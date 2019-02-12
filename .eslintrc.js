module.exports = {
  extends: './node_modules/rogin-scripts/eslint.js',
  rules: {
    'comma-dangle': [0],
    camelcase: [0, {ignoreDestructuring: true}],
    'consistent-return': 1,
    'babel/camelcase': 0,
    // why is this linting?
    'jest/prefer-todo': 0,
  },
};
