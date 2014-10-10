( function( root, factory ) {

  root.App = factory();

} )( this, function() {

  var privateWhatever = ' world';
  var publicWhatever = function publicWhatever() {
    return 'o/ ' + privateWhatever;
  };

  return {
    publicWhatever: publicWhatever
  };

} );
