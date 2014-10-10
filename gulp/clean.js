var gulp = require('gulp');
var rimraf = require('gulp-rimraf'); // BETTER CALL SAU.. DEL
var plumber = require('gulp-plumber');
var reload = require('gulp-livereload');

module.exports = function() {

  return gulp.src('app/dist/', { read: false })
    .pipe(plumber())
    .pipe(rimraf()) // "new" gulp clean (& alrdy replaced by non-gulp-plugin del)
    .pipe(reload(global.lrserver));
};
