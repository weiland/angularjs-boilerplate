/* gloabl: ENV */
(function () {

    function addHash( ENV ) {
        return function( url ) {
          // !~url.search('#') looks cooler than url.indexOf('#')
          return !~url.search( '#' ) && !ENV.html5mode ? '#' + url : url ;
        };
    }

    addHash.$inject = [ 'ENV' ];

    angular
        .module( 'app' )
        .filter( 'addHash', addHash );

})();
