var expect = require("chai").expect;
var mocha = require("mocha");

mocha.describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  mocha.it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
});
