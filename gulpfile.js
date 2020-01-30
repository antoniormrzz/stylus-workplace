var { src, series, dest, watch } = require('gulp');
var stylus = require('gulp-stylus');
var cssc = require('gulp-css-condense');
var sourcemaps = require('gulp-sourcemaps');

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

exports.defaultTask = series([this.stylusTask, this.compress]);

watchTask = () => {
  return watch('./stylus/**', { ignoreInitial: false }, this.defaultTask);
};

exports.default = watchTask;
