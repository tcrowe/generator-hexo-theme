
# hexo theme generator for yeoman
---
It's used to quickly scaffold a theme for hexo. The theme it creates is fully functional and has no design. That part is up to you!

### Features
---
It creates all of the necessary files you need to make your own theme.

You will be prompted for:
+ Theme name?
+ Stylesheet language?
  * Stylus
  * scss
  * sass
  * less
  * css
+ Template language?
  * EJS
  * Jade
  * Swig
+ Use hexo plugins directory? (yes/no)
+ Bower? (yes/no)

### Install
---
```sh
npm install -g generator-hexo-theme
```

### Use
---
Navigate to the directory you want to place the theme project in.
```sh
mkdir mytheme
cd mytheme
yo hexo-theme
```
Then goto your hexo site project's `_config.yml` and switch the `theme` propery to what you have named it.

### Ideas
Please post any ideas to issues. If you know how to use any of the technologies it generates better than me there are places, especially in the templates, where it could be improved by you! Pull requests welcome.

### Resources
---
+ hexo static site generator [hexo.io](http://hexo.io)
+ Yeoman scaffolding tool [yeoman.io](http://yeoman.io)
+ Bower package manager [bower.io](http://bower.io)
+ EditorConfig [editorconfig.org](http://editorconfig.org)
