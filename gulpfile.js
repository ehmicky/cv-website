'use strict'

const { src, dest, watch, series, parallel } = require('gulp');
const gulpUglify = require('gulp-uglify');
const gulpSass = require('gulp-sass');
const del = require('del')

const SRC_DIR = 'src'
const BUILD_DIR = 'build'
const JS_FILES = `${SRC_DIR}/**/*.js`
const SASS_FILES = `${SRC_DIR}/**/*.scss`
const OTHER_FILES = [
  `${SRC_DIR}/{css,images,libs}/**`,
  `${SRC_DIR}/favicon.ico`,
  `${SRC_DIR}/index.html`,
]

const clean = async function() {
  await del(BUILD_DIR)
}

const uglify = function() {
  return src(JS_FILES)
    .pipe(gulpUglify())
    .pipe(dest(BUILD_DIR));
};

const sass = function () {
  return src(SASS_FILES)
    .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
    .pipe(dest(BUILD_DIR));
};

const move = function() {
  return src(OTHER_FILES).pipe(dest(BUILD_DIR))
}

const build = series(clean, move, parallel([uglify, sass]))

const watchTask = function(){
  return watch(`${SRC_DIR}/**`, build)
}

module.exports = {
  build,
  watch: watchTask,
}
