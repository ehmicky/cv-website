'use strict'

const del = require('del')
const { src, dest, watch, series } = require('gulp')
const gulpUglify = require('gulp-uglify')

const SRC_DIR = 'src'
const BUILD_DIR = 'build'
const JS_FILES = `${SRC_DIR}/**/*.js`
const OTHER_FILES = [
  `${SRC_DIR}/{css,images,libs,fonts}/**`,
  `${SRC_DIR}/favicon.ico`,
  `${SRC_DIR}/index.html`,
  `${SRC_DIR}/_redirects`,
]

const clean = async function () {
  // TODO: replace with `fs.promises.rm(..., {recursive: true})` after
  // dropping support for Node <14
  await del(BUILD_DIR)
}

const uglify = function () {
  return src(JS_FILES).pipe(gulpUglify()).pipe(dest(BUILD_DIR))
}

const move = function () {
  return src(OTHER_FILES).pipe(dest(BUILD_DIR))
}

const build = series(clean, move, uglify)

const watchTask = function () {
  return watch(`${SRC_DIR}/**`, build)
}

module.exports = {
  build,
  watch: watchTask,
}
