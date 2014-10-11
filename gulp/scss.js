var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var reload = require('browser-sync').reload;

module.exports = function() {

  return gulp.src(['app/libs/foundation/scss/foundation.scss', 'app/src/scss/app.scss'])
    .pipe(plumber())
    .pipe(sass({unixNewlines: true}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('app/dist/css'))
    .pipe(reload({stream: true}));
};
