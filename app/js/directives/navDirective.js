(function () {

  function nav() {
    var directive = {

      restrict: 'E',

      template: [
            '<ul class="navigation">',
                '<li ng-repeat="link in nav.links">',
                    '<a href="{{link.url | addHash}}">{{link.name}}</a>',
                '</li>',
            '</ul>'
        ].join(''),

      replace: true,

      controllerAs: 'nav',

      controller: function controller($scope, $element, $attrs) {
        var vm = this;
        vm.links = [
            {name: 'home',  url: '/home'},
            {name: 'about', url: '/about'}
        ];
      },

      link: function link(scope, element, attrs, ctrl) {
        element.on('click', function () {
            console.log('clicked');
        });
      }
    };

    return directive;
  }

  angular
    .module('app')
    .directive('nav', nav);
})();
