'use strict';

var path = require('path'),
    helpers = require('yeoman-test'),
    assert = require('yeoman-assert'),
    defaultOptions;

defaultOptions = {
    themeName: 'temp-theme',
    templateLang: 'ejs',
    stylesheetLang: 'styl',
    technicalFeatures: [
        'scripts',
        'bower'
    ]
};

describe('generator-hexo-theme', function () {
    beforeEach(function (done) {
        helpers.run(path.join(__dirname, '..', 'app'))
            .withOptions(defaultOptions)
            .withPrompts(defaultOptions)
            .on('end', done);
    });

    it('can make the theme', function () {
        assert.file([
            '.bowerrc',
            'bower.json',
            '_config.yml',
            'package.json',
            'source/favicon.ico',
            'source/css/temp-theme.styl',
            'source/js/temp-theme.js',
            'layout/index.ejs'
        ]);
    });
});
