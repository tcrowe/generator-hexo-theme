const path = require("path");
const helpers = require("yeoman-test");
const assert = require("yeoman-assert");

const defaultOptions = {
  name: "temp-theme",
  tmpl: "ejs",
  style: "styl",
  other: ["scripts"]
};

describe("generator-hexo-theme", function() {
  beforeEach(function(done) {
    helpers
      .run(path.join(__dirname, "..", "app"))
      .withOptions(defaultOptions)
      .withPrompts(defaultOptions)
      .on("end", done);
  });

  it("can make the theme", function() {
    assert.file([
      "_config.yml",
      "source/favicon.ico",
      "source/css/temp-theme.styl",
      "source/js/temp-theme.js",
      "layout/index.ejs"
    ]);
  });
});
