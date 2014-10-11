var karma = require('karma').server;

// Run test once and exit or run test and continue with watch server
module.exports = function ( done, doneCallback ) {
  if( typeof doneCallback === 'undefined' ) {
    doneCallback = done;
  }
  // if done is true (and not a cb function) => no singleRun
  var singleRun = ( done === true ) ? false : true;
  karma.start({
    configFile: __dirname + '/../test/karma.conf.js',
    files: [
      // we need to add ../ cause the conf file is in /test
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../dist/js/app.js',
      './unit/*.js',
      './e2e/*.js'
    ],
    singleRun: singleRun // ohterwise the server continues
  }, done);
};
