// eslint-disable-next-line node/no-unpublished-import
import del from 'del'
// eslint-disable-next-line node/no-extraneous-import
import { src, dest, watch as watchFiles, series } from 'gulp'
// eslint-disable-next-line node/no-unpublished-import
import gulpUglify from 'gulp-uglify'

const SRC_DIR = 'src'
const BUILD_DIR = 'build'
const JS_FILES = `${SRC_DIR}/**/*.js`
const OTHER_FILES = [
  `${SRC_DIR}/{css,images,libs,fonts}/**`,
  `${SRC_DIR}/favicon.ico`,
  `${SRC_DIR}/index.html`,
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

export const build = series(clean, move, uglify)

export const watch = function () {
  return watchFiles(`${SRC_DIR}/**`, build)
}
