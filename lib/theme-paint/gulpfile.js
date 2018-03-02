'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minimist = require('minimist');
var exists = require('fs').existsSync;

// var knownOptions = {
//   string: 'theme',
//   default: { theme: 'blue' }
// }

var options = minimist(process.argv.slice(2));

var themePath = options['theme-path'];

var src = './src/theme/' + options.theme;

if (!themePath && !exists(src)) {
  console.log('This theme "' + options.theme + '" is not exist. Please check it and try again.');
  process.exit();
}

gulp.task('compile', function () {
  console.log(themePath || (src + '/*.scss'));
  return gulp.src((themePath || src) + '/*.scss')
    .pipe(sass.sync())
    .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['compile']);
