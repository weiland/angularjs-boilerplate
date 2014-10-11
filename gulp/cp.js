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
};
