var { src, series, dest, watch } = require('gulp');
var stylus = require('gulp-stylus');
var cssc = require('gulp-css-condense');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

exports.vendor = () => {
  return src('./compressed/**')
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./vendor'));
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

exports.defaultTask = series([this.stylusTask, this.compress, this.vendor]);

watchTask = () => {
  return watch('./stylus/**', { ignoreInitial: false }, this.defaultTask);
};

exports.default = watchTask;
