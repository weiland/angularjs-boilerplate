/* gloabl: ENV */
(function () {

    function HomeCtrl( ENV ) {

        var vm = this; // view model

        vm.name = 'cake';

        vm.greeting = '';

        vm.sayHello = function() {
            resetName();
            vm.greeting = 'o/ ' + vm.name;
        };

        vm.clear = function() {
            vm.greeting = '';
        };

        function resetName() {
            vm.name = ENV.name;
        }
    }

    HomeCtrl.$inject = ['ENV'];

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);
})();
