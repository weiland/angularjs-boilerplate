'use strict';

var gulp = require('gulp');
var test = require('./gulp/test');

gulp.task('server', require('./gulp/server'));
gulp.task('clean', require('./gulp/clean'));
gulp.task('img', require('./gulp/img'));
gulp.task('js', require('./gulp/js'));
gulp.task('scss', require('./gulp/scss'));
gulp.task('cp', require('./gulp/cp'));
gulp.task('html', require('./gulp/html'));
gulp.task('watchdoges', require('./gulp/watchdoges'));
gulp.task('test', test);
gulp.task('testserver', test.bind(null, true));

gulp.task('build', [
//  'clean', // cannot be used yet, cause it deletes the entire dir :(
  'js',
  'cp',
  'scss',
  'html'
]);

gulp.task('default', [
  'server',
  'js',
  'cp',
  'scss',
  'img',
  'html',
  'watchdoges'
]);

