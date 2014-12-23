/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('hexo-theme generator', function() {
	beforeEach(function(done) {
		helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
			if (err) {
				return done(err);
			}
			this.app = helpers.createGenerator('hexo-theme:app', [
				'../../app'
			]);
			done();
		}.bind(this));
	});

	it('creates expected files', function(done) {
		helpers.mockPrompt(this.app, {
			themename: 'test-theme',
			templatelang: 'ejs',
			features: [
				'scripts',
				'bower',
				'editorconfig',
				'jshint'
			]
		});
		this.app.options['skip-install'] = true;
		this.app.run({}, function() {
			helpers.assertFile([
				'layout',
				'scripts',
				'source',
				'.editorconfig',
				'.jshintrc',
				'_config.yml',
				'bower.json',
				'.bowerrc',
				'package.json'
			]);
			done();
		});
	});
});
