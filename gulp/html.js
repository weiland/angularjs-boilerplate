var gulp = require('gulp');
var reload = require('browser-sync').reload;

module.exports = function () {
  return gulp.src('app/src/*.html')
    .pipe(gulp.dest('app/dist'))
    .pipe(reload({stream: true}));
};
