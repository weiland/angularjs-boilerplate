var gulp = require('gulp');
var reload = require('browser-sync').reload;

// copy vendors, fonts, static files (views, txt, icons)
module.exports = function(){

  gulp.src(['app/static/favicon.ico', 'app/static/robots.txt', 'app/static/humans.txt'])
      .pipe(gulp.dest('./dist'))
      .pipe(reload({stream:true}));
};
