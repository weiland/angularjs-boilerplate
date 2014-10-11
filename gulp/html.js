var gulp = require('gulp');
var reload = require('browser-sync').reload;

module.exports = function () {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(reload({stream: true}));
};
