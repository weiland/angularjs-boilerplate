(function() {
  'use strict';

  var ENV = {
    name: 'world',
    html5Mode: true
  };

  angular
    .module( 'app.config', [])
    .constant( 'ENV', ENV );

})();
