# Angular app Boilerplate

Simple Angular.js Boilerplate 
This project is still in beta!

(and it follows an entire novel! :scream: )

### Requirements
- gulp `npm install -g gulp` (a globally installed gulp is always good)
- bower (and this time it is not looking for women (ok, only german people will get this.. hopefully))
- browserify (not yet)
- phantomjs (karma jasmine tests) `brew install phantomjs`
- ruby sass (rbenv || rvm) && `gem install sass`

### Getting started
- clone this repository `git clone git@github.com:weiland/webapp-boilerplate.git && cd webapp-boilerplate && npm install && bower install`
- run `gulp` 

- Alternatively run `git remote add boilerplate && git pull boilerplate master` (when using the repository as parent/boilerplate)
- adjust names (package.json, README.md)
- `gulp server`  only serves dist/ as static content via express
- `gulp`  runs the server, watches your files, compiles and updates the dist/ and tiny-lr will update your browser
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
- [ ] open `0.0.0.0:4200` in the browser
- [x] add tiny-lr with express to run app with tiny-lr
- [x] use gulp-ruby-sass (even though it's slower than gulp-sass) for sass (i mean the .scss not the lovely indented sass syntax) + autoprefixer
- [ ] gulp-livereload also for views
- [ ] gulp-newer for images (dont wanna redo images) + gulp-imagemin
- [x] move only html/markup task
- [x] move js (and perhaps concat some stuff if there's no deferred loading)
- [ ] or use browserify
- [ ] reactify support (+browserify, vinyls sourcesstream, vinyl trans)
- [ ] gulp-karma, karma-jasmine, phantomjs-launcher
- [ ] gulp header? (banner copyright in js files)
- [ ] gulp notify?
- [x] gulp plumber for errors? (worked well with express)
- [ ] move directory names etc in config.js
- [ ] use names such as styles, scripts instead of scss, js for task names
- [ ] consider use of cleaning task before building
- [ ] onbuild: minify only?
- [ ] more minifying and caching support

### License
METT

:wq
