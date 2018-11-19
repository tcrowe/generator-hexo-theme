const path = require("path");
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const { options } = this;

    this.log("--=[ generator-hexo-theme ]=--");

    const namePrompt = {
      name: "name",
      message: "What is the theme name?",
      default:
        options.name ||
        this.appname ||
        process
          .cwd()
          .split(path.sep)
          .pop()
    };

    const tmplPrompt = {
      name: "tmpl",
      message: "Which template language to use?",
      type: "list",
      default: options.tmpl || "ejs",
      choices: ["ejs", "pug", "swig", "nunjucks"]
    };

    const stylePrompt = {
      name: "style",
      message: "Which stylesheet language to use?",
      type: "list",
      default: options.style || "styl",
      choices: ["styl", "scss", "sass", "less", "css"]
    };

    const otherPrompt = {
      name: "other",
      type: "checkbox",
      message: "Other technical features",
      choices: [
        {
          name: "Hexo scripts directory (hexo plugins)",
          value: "scripts",
          checked: false
        },
        {
          name: "EditorConfig file .editorconfig",
          value: "editorconfig",
          checked: false
        },
        {
          name: "node npm package.json",
          value: "packagejson",
          checked: false
        }
      ]
    };

    const promptList = [namePrompt, tmplPrompt, stylePrompt, otherPrompt];

    // run the prompts and goto the next step
    this.answers = await this.prompt(promptList);
  }

  writing() {
    const { name, tmpl, style, other } = this.answers;

    // copy the layout directory
    this.fs.copy(
      this.templatePath(`layout-${tmpl}`),
      this.destinationPath("layout")
    );

    // make the source directory
    // files in `source` get copied to `public` when hexo generates
    this.fs.copy(
      this.templatePath("favicon.ico"),
      this.destinationPath("source/favicon.ico")
    );

    const styleSrc = `styles/style.${style}`;
    const styleDest = `source/css/${name}.${style}`;
    this.fs.copy(this.templatePath(styleSrc), this.destinationPath(styleDest));
    this.fs.write(this.destinationPath(`source/js/${name}.js`), "");

    // use hexo plugins?
    if (other.includes("scripts") === true) {
      this.fs.copy(
        this.templatePath("scripts"),
        this.destinationPath("scripts")
      );
    }

    // use editorconfig?
    if (other.includes("editorconfig") === true) {
      this.fs.copy(
        this.templatePath(".editorconfig"),
        this.destinationPath(".editorconfig")
      );
    }

    // use package.json?
    if (other.includes("packagejson") === true) {
      this.fs.copyTpl(
        this.templatePath("package.json"),
        this.destinationPath("package.json"),
        {
          name: name
        }
      );
    }

    // theme config file
    this.fs.copyTpl(
      this.templatePath("_config.yml"),
      this.destinationPath("_config.yml"),
      {
        name: name
      }
    );
  }
};
