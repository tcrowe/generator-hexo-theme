const assert = require("assert");

describe("hexo-theme generator", function() {
  it("can be imported without blowing up", function() {
    const app = require("../app");
    assert(app !== undefined);
  });
});
