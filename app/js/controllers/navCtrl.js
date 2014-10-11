(function () {

    function NavCtrl( ) {

        var vm = this;
        vm.links = [
            {name: 'home',  url: '/home'},
            {name: 'about', url: '/about'}
        ];
    }

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);
})();
