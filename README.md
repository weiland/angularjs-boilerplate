# Angular.js Boilerplate

[![Build Status](https://travis-ci.org/weiland/angularjs-boilerplate.svg)](https://travis-ci.org/weiland/angularjs-boilerplate)
[![devDependency Status](https://david-dm.org/weiland/angularjs-boilerplate/dev-status.svg)](https://david-dm.org/weiland/angularjs-boilerplate#info=devDependencies)

Angular.js Boilerplate is a simple frontend template to start a new angular webbapp.


## Getting started

- Clone the git repository `git clone https://github.com/weiland/angularjs-boilerplate`
- Cd into it and run npm install and bower install 
  `cd angularjs-boilerplate && npm install && bower install`
- Alternatively, add the repository as parent/boilerplate remote
  `git init && git remote add boilerplate git@github.com:weiland/angularjs-boilerplate.git && git pull boilerplate master`

## Structure
- `app` main app directory (working dir)
    + `img` place all application images here
    + `js` main structure of the angular app here
        * appModule.js
        * appConfig.js
        * appRoutes.js
        * `components`
        * `layout`
        * `services`
    + `scss` all styles as sassy css (CSS3, `.scss`)
    + `static` favicon.ico, robots.txt, humans.txt, etc
    + index.html (main app file)
- `dist` build directory (same as app, but scss => css)
- `gulp` all gulp tasks
- `test` contains karma jasmine phantomjs tests (unit, midway, integration/e2e)
- config.js
- gulpfile.js
- other project configurations files (.jshintrc, etc)

## Features

* HTML5 Boilerplate with a small reset.css
* SCSS
* Browsersync for development
* Angularjs
* Karma Jasmine Tests (via PhantomJS)


## Dependencies

* node >=0.10.0
* gulp
* bower
* phantomjs (`brew install phantomjs`)
* karma (with jasmine)


## License
METT

:wq
