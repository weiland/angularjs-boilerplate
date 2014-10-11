var gulp = require('gulp');
var reload = require('browser-sync').reload;

module.exports = function() {
  gulp.src('app/img/**/*')
    // first we just copy, later we add imagemin etc *TODO*
    .pipe(gulp.dest('./dist/img'))
    .pipe(reload({stream: true}));
};
