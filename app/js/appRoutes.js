/* global SubCtrl:false, angular:false */
(function() {
  'use strict';

  /* @ngInject */
  function Router( $routeProvider, $locationProvider, ENV ) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'SubCtrl as vm',
        resolve: SubCtrl.resolve
      })
      .otherwise({
        redirectTo: 'home'
      });


    $locationProvider
      .html5Mode( ENV.html5Mode );
  }

  Router.$inject = [ '$routeProvider', '$locationProvider', 'ENV' ];

  angular
    .module( 'app.config' )
    .config( Router );

})();
