var gulp        = require('gulp');
var refresh     = require('gulp-livereload');

// copy vendors, fonts, static files (views, txt, icons)
module.exports = function(){

  gulp.src(['app/src/favicon.ico', 'app/src/robots.txt', 'app/src/humans.txt'])
      .pipe(gulp.dest('app/dist'))
      .pipe(refresh(global.lrserver));
};
