"use strict";

require.config({
  paths: {
    mocha: 'node_modules/mocha/mocha',
    blanket: 'node_modules/blanket/dist/qunit/blanket',
    'mocha-blanket': 'node_modules/grunt-mocha-blanket/support/mocha-blanket',
    chai: 'node_modules/chai/chai'
  },
  shim: {
    blanket: {
      deps: ['mocha'],
      init: function () {
        window.blanket.options({
          reporter: window.PHANTOMJS ?
            'node_modules/grunt-mocha-blanket/support/grunt-reporter.js' : null,
          branchTracking: true,
          filter: /\/src/,
          antifilter: /\/(test|node_modules)/
        });
      }
    },
    'mocha-blanket': ['blanket']
  }
});

define(['mocha-blanket'], function() {

});
