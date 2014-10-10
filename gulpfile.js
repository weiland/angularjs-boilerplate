'use strict';

var gulp = require('gulp');

var server = require('./gulp/server');
var watchdoges = require('./gulp/watchdoges');
var js = require('./gulp/js');
var scss = require('./gulp/scss');
var cp = require('./gulp/cp');
var html = require('./gulp/html');

gulp.task('server', server);
gulp.task('js', js);
gulp.task('scss', scss);
gulp.task('cp', cp);
gulp.task('html', html);
gulp.task('watchdoges', watchdoges);

gulp.task('build', [
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
  //'img', // TODO
  'html',
  'watchdoges'
]);
