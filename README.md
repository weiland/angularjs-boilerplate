# Webapp HTML5 Boilerplate

Simple Frontend HTML5 Boilerplate with main focus
on angular.js, ember.js and ampersand.js.

### Requires
- gulp `npm install gulp -g` (a globally installed gulp is always good)
- bower (and this time it is not looking for women (ok, only german people will get this.. hopefully))
- browserify
- phantomjs (karma jasmine tests) `brew install phantomjs`
- ruby sass (rbenv || rvm) && `gem install sass`

### Getting started
- clone this repository `git clone git://git@github.com/weiland/webapp-boilerplate`
- or do `git init && git remote add boilerplate && git pull boilerplate master`
- adjust names
- `gulp server` will serve dist/ as static content via express
- `gulp` will run the server, watch your files, compile and update the dist/ and tiny-lr will update your browser
- all your app stuff is in the app/ directory. if you place it there.

### Main Todos / Ideas
- Offering an immediately usable boilerplate
- Creating a yeoman generator
    + choosing scss/css framework (foundation, bootstrap, ...)
    + coffee or pure js
    + angular.js/ember.js/ampersand.js/backbone.js/chaplin.js/react.js
    + IE9 > support? (hello no!) or ES5 
    + ES6 (traceur?)
    + w/ node-backend
    + or just static
    + hoodie support
    + couchdb (puchdb), mongoose, localforage

### TODO Gulp
- add tiny-lr with express to run app with tiny-lr
- use gulp-ruby-sass (even though it's slower than gulp-sass) for sass (i mean the .scss not the lovely indented sass syntax) + autoprefixer
- gulp-livereload also for views
- gulp-newer for images (dont wanna redo images) + gulp-imagemin
- move only html/markup task
- move js (and perhaps concat some stuff if there's no deferred loading)
- or use browserify
- reactify support (+browserify, vinyls sourcesstream, vinyl trans)
- gulp-karma, karma-jasmine, phantomjs-launcher
- gulp header?
- gulp notify?
- gulp plumber for errors? (worked well with express)
- move directory names etc in config.js
- use names such as styles, scripts instead of scss, js for task names
- consider use of cleaning task before building
- onbuild: minify only?
- more minifying and caching support

### License
MIT

:wq
