// Modules
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');

// Tasks
gulp.task('make-css', () => gulp.src('./**/css/main.scss', { base: './' })
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest(__dirname))
);

gulp.task('sass:watch', () => gulp.watch(path.join(__dirname, '**/*.scss'), ['make-css']));

gulp.task('default', ['make-css']);
