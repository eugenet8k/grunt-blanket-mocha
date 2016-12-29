"use strict";

require.config({
  baseUrl: '',
  paths: {
    mocha: 'node_modules/mocha/mocha',
    blanket: 'node_modules/blanket/dist/qunit/blanket',
    'mocha-blanket': 'node_modules/grunt-mocha-blanket/support/mocha-blanket',
    chai: 'node_modules/chai/chai',
    suite: 'test/test-suite',
    loader: 'test/test-loader'
  },
  shim: {
    blanket: {
      deps: ['mocha'],
      init: function () {
        window.blanket.options({
          reporter: window.PHANTOMJS ?
            'node_modules/grunt-mocha-blanket/support/grunt-reporter.js' : null,
          branchTracking: true,
          filter: /\/src/
        });
      }
    },
    'mocha-blanket': ['blanket'],
    suite: ['mocha-blanket'],
    loader: ['suite']
  }
});
