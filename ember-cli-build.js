/* eslint-env node */
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    eslint: {
      testGenerator: 'qunit',
      group: true,
      rulesDir: '.eslintrc.json',
      extensions: ['js']
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    }
  })
  return app.toTree()
}
