(function () {

    function NavCtrl( ) {

        var vm = this;
        vm.links = {
            'home'  : '/home',
            'about' : '/about'
        };
    }

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);
})();
