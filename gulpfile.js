import { rm } from 'node:fs/promises'

import gulp from 'gulp'
import gulpUglify from 'gulp-uglify'

export * from '@ehmicky/dev-tasks'

const SRC_DIR = 'src'
const BUILD_DIR = 'build'
const JS_FILES = `${SRC_DIR}/**/*.js`
const OTHER_FILES = [
  `${SRC_DIR}/{css,images,libs,fonts}/**`,
  `${SRC_DIR}/favicon.ico`,
  `${SRC_DIR}/index.html`,
]

const clean = () => rm(BUILD_DIR, { force: true, recursive: true })

const uglify = () =>
  gulp.src(JS_FILES).pipe(gulpUglify()).pipe(gulp.dest(BUILD_DIR))

const move = () => gulp.src(OTHER_FILES).pipe(gulp.dest(BUILD_DIR))

export const buildSite = gulp.series(clean, move, uglify)

export const watch = () => gulp.watch(`${SRC_DIR}/**`, buildSite)
