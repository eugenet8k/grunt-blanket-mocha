require(['config'], function() {
  require(['loader'], function(testLoader) {
      //start running the mocha tests
      testLoader.start();
  });
});
