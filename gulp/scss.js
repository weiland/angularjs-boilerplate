var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var reload = require('gulp-livereload');

module.exports = function() {

  return gulp.src('app/src/scss/app.scss')
    .pipe(plumber())
    .pipe(sass({unixNewlines: true}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('app/dist/css'))
    .pipe(reload(global.lrserver));
};
