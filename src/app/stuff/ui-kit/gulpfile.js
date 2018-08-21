const gulp = require('gulp');
const include = require('gulp-file-include');

gulp.task('merge-html', () => gulp.src('./templates/index.html')
  .pipe(include({
    prefix: '@@',
    basePath: '@file'
  }))
  .pipe(gulp.dest('./'))
);

gulp.task('watch', () => {
  gulp.watch('templates/*.html', ['merge-html']);
});

gulp.task('default', ['merge-html', 'watch']);
