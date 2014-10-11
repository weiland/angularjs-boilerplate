/* gloabl: ENV */
(function () {

    function AboutCtrl( ENV ) {

        var vm = this; // view model

        vm.name = ENV.name;

        vm.resolve = function() {
          // add service with deferred content
          return true;
        };

        vm.food = 'cake';

    }

    AboutCtrl.$inject = ['ENV'];

    angular
        .module('app')
        .controller('AboutCtrl', AboutCtrl);
})();
