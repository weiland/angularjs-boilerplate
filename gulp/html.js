var gulp = require('gulp');
var reload = require('gulp-livereload');

module.exports = function () {
  return gulp.src('app/src/*.html')
    .pipe(gulp.dest('app/dist'))
    .pipe(reload(global.lrserver));
};
