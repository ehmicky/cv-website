'use strict'

const { src, dest, watch, series, parallel } = require('gulp');
const gulpUglify = require('gulp-uglify');
const gulpSass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const SRC_DIR = 'src'
const BUILD_DIR = 'build'
const JS_FILE = `${SRC_DIR}/js/scripts.js`
const SASS_FILE = `${SRC_DIR}/scss/styles.scss`

const uglify = function() {
    return src(JS_FILE)
        .pipe(gulpUglify())
        .pipe(dest(BUILD_DIR));
};

const sass = function () {
    return src(SASS_FILE)
        .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
        .pipe(dest(BUILD_DIR));
};

module.exports.build = series([uglify, sass])

const watchJs = function(){
  return watch(JS_FILE, uglify)
}

const watchScss = function(){
  return watch(SASS_FILE, sass)
}

module.exports.watch = parallel([watchJs, watchScss])
