
# generator-hexo-theme

Generate a hexo theme

Template choices:
+ ejs
+ nunjucks
+ pug
+ swig

Style choices:
+ stylus
+ sass
+ scss
+ less
+ css

Other:
+ hexo scripts directory
+ .editorconfig file
+ package.json

## Install

```sh
npm install --global yo
npm install --global generator-hexo-theme
```

## Use

If you don't have a site yet create one with `hexo init` [hexo-cli](https://github.com/hexojs/hexo-cli).

```sh
mkdir my-site
cd my-site
hexo init
```

Navigate to the directory you want to place the theme project in (most likely `themes/`).

```sh
# from the site root
cd themes

# make a new theme directory
mkdir my-theme
cd my-theme

# generate
yo hexo-theme
```

1. Check `_config.yml` in your **main blog directory**
  * Set `theme` property to your theme name, activating this theme
2. Check `_config.yml` in your **theme directory**
  * Change menu items if needed
  * Change stylesheet and scripts list if needed
3. Navigate back to your **main blog directory**
4. `hexo server --debug`

## Hexo renderers

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

## Thank you

+ [moosoul](https://github.com/moosoul)
+ [jonashao](https://github.com/jonashao)

## Resources -- What is all this for?

+ hexo static site generator [hexo.io](https://hexo.io)
+ Yeoman scaffolding tool [yeoman.io](https://yeoman.io)
+ EditorConfig [editorconfig.org](http://editorconfig.org)
