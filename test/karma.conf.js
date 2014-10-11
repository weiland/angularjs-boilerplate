module.exports = function (config) {
  config.set({
    basePath : '',
    autoWatch : true,
    frameworks: ['jasmine'], //, 'ng-scenario'
    browsers : ['PhantomJS'],
    plugins : [
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    files: [],
    reporters : ['spec'],
    singleRun: true
  });
};
