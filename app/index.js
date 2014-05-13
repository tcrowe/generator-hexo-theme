'use strict';
var yeoman = require('yeoman-generator'),
	yosay = require('yosay');

var HexoThemeGenerator = yeoman.generators.Base.extend({
	init: function() {
		this.pkg = require('../package.json');
		this.on('end', function() {
			if (!this.options['skip-install']) {
				this.installDependencies();
			}
		});
	},

	askFor: function() {
		var done = this.async(),
			prompts;

		// Have Yeoman greet the user.
		this.log(yosay('Welcome to the marvelous HexoTheme generator!'));

		// get some answers
		prompts = [
			{
				name: 'themename',
				message: 'What is your theme name?',
				default: process.env.PWD.split('/').pop()
			},
			{
				name: 'features',
				type: 'checkbox',
				message: 'Features',
				choices: [
					{
						name: 'Scripts (hexo plugins)',
						value: 'scripts',
						checked: false
					},
					{
						name: 'Bower packages',
						value: 'bower',
						checked: false
					},
					{
						name: 'EditorConfig file',
						value: 'editorconfig',
						checked: false
					},
					{
						name: 'JSHint file',
						value: 'jshint',
						checked: false
					}
				]
			}
		];

		this.prompt(prompts, function(answers) {
			var features = answers.features;

			function hasFeature (feat) {
				return features.indexOf(feat) !== -1;
			}

			this.themename = answers.themename;
			this.scripts = hasFeature('scripts');
		    this.bower = hasFeature('bower');
		    this.editorconfig = hasFeature('editorconfig');
		    this.jshint = hasFeature('jshint');
			done();
		}.bind(this));
	},

	themeFiles: function() {
		// copy the layout directory
		this.directory('layout', 'layout');

		// make the source directory
		// files in `source` get copied to `public` on generate
		this.directory('source');

		// use hexo plugins?
		if (this.scripts) {
			this.mkdir('scripts');
			this.template('_package.json', 'package.json');
		}

		// use bower components?
		if (this.bower) {
			this.template('_bower.json', 'bower.json');
		}

		// use editorconfig?
		if (this.editorconfig) {
			this.copy('editorconfig', '.editorconfig');
		}

		// use jshint?
		if (this.jshint) {
			this.copy('jshintrc', '.jshintrc');
		}

		// all theme get this config
		this.template('_config.yml', '_config.yml');
	}
});

module.exports = HexoThemeGenerator;
