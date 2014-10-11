/* global browser:true, before  */
describe('midway: testing modules', function() {
  describe('app module:', function() {

    var module;
    before(function() {
      module = angular.module('app');
    });

    it('should be registered', function() {
      expect(module).not.to.equal(null);
    });

    describe('dependencies:', function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      before(function() {
        deps = module.value('app').requires;
      });

      it('should have App.Controllers as a dependency', function() {
        expect(hasModule('App.Controllers')).to.equal(true);
      });

      it('should have App.Directives as a dependency', function() {
        expect(hasModule('App.Directives')).to.equal(true);
      });

      it('should have App.Filters as a dependency', function() {
        expect(hasModule('App.Filters')).to.equal(true);
      });

      it('should have App.Routes as a dependency', function() {
        expect(hasModule('App.Routes')).to.equal(true);
      });

      it('should have App.Services as a dependency', function() {
        expect(hasModule('App.Services')).to.equal(true);
      });
    });
  });
});
