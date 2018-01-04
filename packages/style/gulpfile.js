'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var theme = 'firebrick'

gulp.task('compile', function() {
  return gulp.src('./src/theme/' + theme + '/*.scss')
    .pipe(sass.sync())
    .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['compile']);
