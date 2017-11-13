'use strict'

var path = require('path')
var helpers = require('yeoman-test')
var assert = require('yeoman-assert')
var defaultOptions

defaultOptions = {
  name: 'temp-theme',
  tmpl: 'ejs',
  style: 'styl',
  other: [
    'scripts',
    'bower'
  ]
}

describe('generator-hexo-theme', function() {
  beforeEach(function(done) {
    helpers.run(path.join(__dirname, '..', 'app'))
      .withOptions(defaultOptions)
      .withPrompts(defaultOptions)
      .on('end', done)
  })

  it('can make the theme', function() {
    assert.file([
      '.bowerrc',
      'bower.json',
      '_config.yml',
      'package.json',
      'source/favicon.ico',
      'source/css/temp-theme.styl',
      'source/js/temp-theme.js',
      'layout/index.ejs'
    ])
  })
})
