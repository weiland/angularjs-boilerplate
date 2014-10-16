var browserSync = require('browser-sync');

module.exports = function() {

  browserSync({
    server: {
      baseDir: './dist/',
      index: 'index.html',
      //directory: true,
      routes: {
        '/vendors': '../bower_components',
        '/home': 'index.html',
        '/about': 'index.html'
      }
    },

    port: 4200,

    //proxy: 'local.dev', // either server or proxy (if we already run an express server)

    browser: 'google chrome',

    logLevel: 'info', // we do not need to debug our dev server that much
    logPrefix: 'AngularApp'
  });
};
