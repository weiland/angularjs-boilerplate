var gulp = require('gulp');
var reload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

module.exports = function() {
  return gulp.src('app/src/js/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('app/dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js'))
    .pipe(reload(global.lrserver));
};
