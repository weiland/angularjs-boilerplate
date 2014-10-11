/* gloabl: ENV */
(function () {

    function AboutCtrl( ENV ) {

        var vm = this; // view model

        vm.name = ENV.name;

        vm.food = 'cake';

    }

    AboutCtrl.$inject = ['ENV'];

    angular
        .module('app')
        .controller('AboutCtrl', AboutCtrl);
})();
