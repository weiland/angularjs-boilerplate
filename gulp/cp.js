var gulp = require('gulp');
var reload = require('browser-sync').reload;

module.exports = function(){

  gulp
    .src(['app/static/favicon.ico', 'app/static/robots.txt', 'app/static/humans.txt'])
    .pipe(gulp.dest('./dist'))
    .pipe(reload({stream:true}));

  gulp
    .src(['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js'])
    .pipe(gulp.dest('./dist/js'));

  // TODO due to avoid views folder, move this to the js task
  gulp
    .src('app/js/views/**/*')
    .pipe( gulp.dest( './dist/js/views' ) );
};
