/* global AboutCtrl:false, angular:false */
(function() {
  'use strict';

  /* @ngInject */
  function Router( $routeProvider, $locationProvider, ENV ) {
    $routeProvider

      .when('/home', {
        templateUrl: 'js/views/home.html',
        controller: 'HomeCtrl', // 'HomeCtrl as homo' works as well
        controllerAs: 'vm'
      })

      .when('/about', {
        templateUrl: 'js/views/about.html',
        controller: 'AboutCtrl', // 'AboutCtrl as about' works as well
        controllerAs: 'vm'
        //resolve: AboutCtrl.resolve
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
