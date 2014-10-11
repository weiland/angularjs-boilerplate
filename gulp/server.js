var browserSync = require('browser-sync');

module.exports = function() {

  browserSync({
    server: {
      baseDir: 'app/dist/',
      directory: true,
      index: 'index.html',
      routes: {
        '/vendors': 'bower_components'
      }
    },

    port: 4200,

    //proxy: 'local.dev', // either server or proxy

    browser: 'google chrome',

    logLevel: 'info', // we do not need to debug our dev server that much
    logPrefix: 'AngularApp'
  });
};
