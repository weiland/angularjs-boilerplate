'use strict';

var gulp = require('gulp');

var server = require('./gulp/server');
var watchdoges = require('./gulp/watchdoges');
var clean = require('./gulp/clean');
var js = require('./gulp/js');
var img = require('./gulp/img');
var scss = require('./gulp/scss');
var cp = require('./gulp/cp');
var html = require('./gulp/html');

gulp.task('server', server);
gulp.task('clean', clean);
gulp.task('img', img);
gulp.task('js', js);
gulp.task('scss', scss);
gulp.task('cp', cp);
gulp.task('html', html);
gulp.task('watchdoges', watchdoges);

gulp.task('build', [
//  'clean', // cannot use it yet, cause it deltes the entire dire :(
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
