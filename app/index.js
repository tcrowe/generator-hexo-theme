'use strict';

var path = require('path'),
    generator = require('yeoman-generator');

function prompts() {
    var done = this.async(),
        themeName,
        templateLang,
        stylesheetLang,
        technicalFeatures,
        promptList;

    themeName = {
        name: 'themeName',
        message: 'What is the theme name?',
        default: process.cwd().split(path.sep).pop()
    };

    templateLang = {
        name: 'templateLang',
        message: 'Which template language to use?',
        type: 'list',
        choices: [{
            name: 'EJS',
            value: 'ejs',
            checked: true
        }, {
            name: 'Jade (deprecated, use Pug)',
            value: 'jade'
        }, {
            name: 'Pug',
            value: 'pug'
        }, {
            name: 'Swig',
            value: 'swig'
        }, {
            name: 'Nunjucks',
            value: 'nunjucks'
        }]
    };

    stylesheetLang = {
        name: 'stylesheetLang',
        message: 'Which stylesheet language to use?',
        type: 'list',
        choices: [{
            name: 'Stylus',
            value: 'styl',
            checked: true
        }, {
            name: 'Sass: *.scss format',
            value: 'scss'
        }, {
            name: 'Sass: *.sass format',
            value: 'sass'
        }, {
            name: 'Less',
            value: 'less'
        }, {
            name: 'CSS',
            value: 'css'
        }]
    };

    technicalFeatures = {
        name: 'technicalFeatures',
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
    };

    promptList = [
        themeName,
        templateLang,
        stylesheetLang,
        technicalFeatures
    ];

    function promptsComplete(answers) {
        var features = answers.technicalFeatures;

        function hasFeature(feat) {
            return features.indexOf(feat) !== -1;
        }

        this.themeName = answers.themeName;
        this.templateLang = answers.templateLang;
        this.stylesheetLang = answers.stylesheetLang;

        this.scripts = hasFeature('scripts');
        this.bower = hasFeature('bower');

        // async yeoman function complete
        done();
    }

    this.log('--=[ generator-hexo-theme ]=--');

    // run the prompts and goto the next step
    this.prompt(promptList, promptsComplete.bind(this));
}

function createFiles() {
    var themeName = this.themeName,
        templateLang = this.templateLang,
        stylesheetLang = this.stylesheetLang,
        scripts = this.scripts,
        bower = this.bower,
        stylesheetPath,
        scriptPath;

    // copy the layout directory
    this.fs.copy(
        this.templatePath('layout-' + templateLang),
        this.destinationPath('layout')
    );

    // make the source directory
    // files in `source` get copied to `public` when hexo generates
    this.fs.copy(
        this.templatePath('favicon.ico'),
        this.destinationPath('source/favicon.ico')
    );
    stylesheetPath = 'source/css/' + themeName + '.' + stylesheetLang;
    this.fs.write(this.destinationPath(stylesheetPath), '');
    scriptPath = 'source/js/' + themeName + '.js';
    this.fs.write(this.destinationPath(scriptPath), '');

    // use hexo plugins?
    if (scripts === true) {
        this.fs.write(
            this.destinationPath('scripts/hexo-plugins.txt'),
            'https://hexo.io/plugins'
        );
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            { themeName: themeName }
        );
    }

    // bower files
    if (bower === true) {
        this.fs.copyTpl(
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json'),
            { themeName: themeName }
        );
        this.fs.copy(
            this.templatePath('bowerrc'),
            this.destinationPath('.bowerrc')
        );
    }

    // theme config file
    this.fs.copyTpl(
        this.templatePath('_config.yml'),
        this.destinationPath('_config.yml'),
        { themeName: themeName }
    );
}

module.exports = generator.Base.extend({
    // step 1
    prompts: prompts,
    // step 2
    createFiles: createFiles
});
