var express = require('express');
var tinylr = require('tiny-lr');
var livereload  = require('connect-livereload');

module.exports = function() {
  var lrport = 35729;
  var server = express();

  global.lrserver = tinylr();

  server.use(livereload({
    port: lrport
  }));

  server.use(express.static('app/dist'));

  console.log('webserver on 4200, livereload on ', lrport);

  server.listen(4200);
  global.lrserver.listen(lrport); // node global
};
