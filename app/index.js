'use strict'

var path = require('path')
var generator = require('yeoman-generator')

function prompts() {
  var done = this.async()
  var opts = this.options
  var namePrompt
  var tmplPrompt
  var stylePrompt
  var otherPrompt
  var promptList

  function promptsComplete(answers) {
    var features = answers.other

    function hasFeature(feat) {
      return features.indexOf(feat) !== -1
    }

    this.name = answers.name
    this.tmpl = answers.tmpl
    this.style = answers.style

    this.scripts = hasFeature('scripts')
    this.bower = hasFeature('bower')

    // async yeoman function complete
    done()
  }

  namePrompt = {
    name: 'name',
    message: 'What is the theme name?',
    'default': (opts.name || this.appname || process.cwd().split(path.sep).pop())
  }

  tmplPrompt = {
    name: 'tmpl',
    message: 'Which template language to use?',
    type: 'list',
    'default': (opts.tmpl || 'ejs'),
    choices: [
      'ejs',
      'pug',
      'swig',
      'nunjucks'
    ]
  }

  stylePrompt = {
    name: 'style',
    message: 'Which stylesheet language to use?',
    type: 'list',
    'default': (opts.style || 'styl'),
    choices: [
      'styl',
      'scss',
      'sass',
      'less',
      'css'
    ]
  }

  otherPrompt = {
    name: 'other',
    type: 'checkbox',
    message: 'Other technical features',
    choices: [{
      name: 'Hexo scripts directory (hexo plugins)',
      value: 'scripts',
      checked: false
    }, {
      name: 'Bower: bower.json, .bowerrc',
      value: 'bower',
      checked: false
    }]
  }

  promptList = [
    namePrompt,
    tmplPrompt,
    stylePrompt,
    otherPrompt
  ]

  this.log('--=[ generator-hexo-theme ]=--')

  // run the prompts and goto the next step
  return this.prompt(promptList, promptsComplete.bind(this))
}

function createFiles() {
  var name = this.name
  var tmpl = this.tmpl
  var style = this.style
  var scripts = this.scripts
  var bower = this.bower
  var styleSrc
  var styleDest

  // copy the layout directory
  this.fs.copy(
    this.templatePath('layout-' + tmpl),
    this.destinationPath('layout')
  )

  // make the source directory
  // files in `source` get copied to `public` when hexo generates
  this.fs.copy(
    this.templatePath('favicon.ico'),
    this.destinationPath('source/favicon.ico')
  )

  styleSrc = 'stylesheets/' + style + '.' + style
  styleDest = 'source/css/' + name + '.' + style
  this.fs.copy(this.templatePath(styleSrc), this.destinationPath(styleDest))

  this.fs.write(this.destinationPath('source/js/' + name + '.js'), '')

  // use hexo plugins?
  if (scripts === true) {
    this.fs.write(
      this.destinationPath('scripts/hexo-plugins.txt'),
      'https://hexo.io/plugins'
    )
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: name
      }
    )
  }

  // bower files
  if (bower === true) {
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), {
        name: name
      }
    )
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    )
  }

  // theme config file
  this.fs.copyTpl(
    this.templatePath('_config.yml'),
    this.destinationPath('_config.yml'), {
      name: name
    }
  )
}

module.exports = generator.Base.extend({
  // step 1
  prompts: prompts,
  // step 2
  createFiles: createFiles
})
