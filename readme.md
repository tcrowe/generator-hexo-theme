
Moving future development to [slush-hexo-theme](https://github.com/tcrowe/slush-hexo-theme).

# hexo theme generator for yeoman
It's used to quickly scaffold a theme for hexo. The theme it creates is fully functional and has no design. That part is up to you!

### Features
It creates all of the necessary files you need to make your own theme within an existing hexo.js project.

You will be prompted for:
+ Theme name?
+ Stylesheet language?
  * styl
  * scss
  * sass
  * less
  * css
+ Template language?
  * ejs
  * pug
  * swig
  * Nunjucks
+ Use hexo plugins directory? (yes/no)
+ Bower? (yes/no)

### Install
```sh
npm install -g generator-hexo-theme
```

### Use

Create a new hexo app using [hexo-cli](https://github.com/hexojs/hexo-cli).

```sh
mkdir projectName && cd projectName
hexo init
```

Navigate to the directory you want to place the theme project in (most likely `themes/`).

```sh
mkdir mytheme && cd mytheme
yo hexo-theme
```

+ Check main blog `_config.yml`
  * Set theme property to your theme name, activating this theme
+ Check theme-specific `_config.yml`
  * Change menu items if needed
  * Change stylesheet and js list if needed

To start the server go back to the root of your hexo project and run `hexo server --debug`.

### Ideas
Please post any ideas to issues. If you know how to use any of the technologies it generates better than me there are places, especially in the templates, where it could be improved by you! Pull requests welcome.

### Hexo renderers
It might be necessary to goto the blog root and install a specific renderer for the template language you have chosen. Swig is built into Hexo at the current version.
```sh
# templates
npm install hexo-renderer-ejs
npm install hexo-renderer-njks
npm install hexo-render-pug

# styles
npm install hexo-renderer-stylus
npm install hexo-renderer-less
npm install hexo-renderer-sass
```

### Thank you

+ [moosoul](https://github.com/moosoul)
+ [jonashao](https://github.com/jonashao)

### Resources -- What is all this for?
+ hexo static site generator [hexo.io](http://hexo.io)
+ Yeoman scaffolding tool [yeoman.io](http://yeoman.io)
+ Bower package manager [bower.io](http://bower.io)
+ EditorConfig [editorconfig.org](http://editorconfig.org)
