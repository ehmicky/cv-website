'use strict'

const { src, dest, watch, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const scripts = function() {
    return src('js/scripts.js')
        .pipe(uglify({ output: { comments: '/^!/' } }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('js'));
};

const styles = function () {
    return src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./css'));
};

const build = series([scripts, styles])

const watchJs = function(){
  return watch('js/*.js', scripts)
}
const watchScss = function(){
  return watch('scss/*.scss', styles)
}
const watchTask = parallel([watchJs, watchScss])

module.exports = {
  scripts,
  styles,
  build,
  watch: watchTask,
}
