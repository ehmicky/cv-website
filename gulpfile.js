import { rm } from 'fs/promises'

import gulp from 'gulp'
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
  await rm(BUILD_DIR, { force: true, recursive: true })
}

const uglify = function () {
  return gulp.src(JS_FILES).pipe(gulpUglify()).pipe(gulp.dest(BUILD_DIR))
}

const move = function () {
  return gulp.src(OTHER_FILES).pipe(gulp.dest(BUILD_DIR))
}

export const build = gulp.series(clean, move, uglify)

export const watch = function () {
  return gulp.watch(`${SRC_DIR}/**`, build)
}
