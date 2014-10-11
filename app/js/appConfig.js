(function() {
  'use strict';

  var ENV = {
    name: 'world',
    html5Mode: false
  };

  angular
    .module( 'app.config', [ 'ngRoute' ])
    .constant( 'ENV', ENV );

})();
