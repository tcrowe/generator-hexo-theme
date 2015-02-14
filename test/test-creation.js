/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

/*
	Most of this is auto-generated from the generator-generator.

	We are rolling with this for now. If you think of a better way
	you are welcome to refactor this.
*/

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

	// run through EJS theme creation
	it('should be able to generate an ejs theme', function(done) {
		helpers.mockPrompt(this.app, {
			themename: 'test-theme-ejs',
			templatelang: 'ejs',
			features: [
				'scripts',
				'bower',
				'editorconfig',
				'jshint'
			]
		});

		// what is this?
		this.app.options['skip-install'] = true;

		// check for the files we expect to be created
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

	it('should be able to generate a jade theme', function(done) {
		helpers.mockPrompt(this.app, {
			themename: 'test-theme-jade',
			templatelang: 'jade',
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
