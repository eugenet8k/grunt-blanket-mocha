define(["chai"], function (chai) {
  "use strict";

  mocha.setup('bdd');
  chai.Assertion.includeStack = true;

  // http://chaijs.com/api/bdd/
  window.expect = chai.expect;

  return {
      start: function() {
          // Once dependencies have been loaded using RequireJS, go ahead and run the tests...
          mocha.run();
      }
  };
});
