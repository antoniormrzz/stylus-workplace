var { src, series, dest, watch, concat } = require('gulp');
var stylus = require('gulp-stylus');
var cssc = require('gulp-css-condense');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
var concatCss = require('gulp-concat-css');

exports.vendor = () => {
  return src('./compressed/**')
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./vendor'));
};

exports.final = () => {
  return src('./vendor/**')
    .pipe(concatCss('styles.min.css'))
    .pipe(cssc())
    .pipe(dest('./final'));
};

exports.compress = () => {
  return src('./css/**')
    .pipe(cssc())
    .pipe(dest('./compressed'));
};

exports.stylusTask = () => {
  return src('./stylus/**')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(dest('./css'));
};

exports.defaultTask = series([this.stylusTask, this.compress, this.vendor, this.final]);

watchTask = () => {
  return watch('./stylus/**', { ignoreInitial: false }, this.defaultTask);
};

exports.default = watchTask;
