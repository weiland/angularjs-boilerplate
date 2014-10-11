var gulp = require('gulp');
var reload = require('browser-sync').reload;

// copy vendors, fonts, static files (views, txt, icons)
module.exports = function(){

  gulp.src(['app/src/favicon.ico', 'app/src/robots.txt', 'app/src/humans.txt'])
      .pipe(gulp.dest('app/dist'))
      .pipe(reload({stream:true}));
};
