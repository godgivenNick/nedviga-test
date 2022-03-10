module.exports = {
  extends: [
    // 'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  ignoreFiles: ['./assets/styles/reset.css'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'define-mixin'] }]
  }
}
