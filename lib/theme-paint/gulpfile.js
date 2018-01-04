'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minimist = require('minimist');

var knownOptions = {
  string: 'theme',
  default: { theme: 'blue' }
}

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('compile', function() {
  return gulp.src('./src/theme/' + options.theme + '/*.scss')
    .pipe(sass.sync())
    .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['compile']);
