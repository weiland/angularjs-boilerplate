describe('lib', function () {

  /**
   * init
   */
  describe('init', function () {
    it('should be defined', function () {
      expect(!!lib).toBe(true);
    });
  });


  /**
   * test() method
   * seem to be tasty!
   */
  describe('test()', function () {

    beforeEach(function () {
      lib.doReset();
    });

    it('should created a testval in window.testVal', function () {
      expect(window.testVal).toBeDefined();
    });

  });



});
