// Modules
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const include = require('gulp-file-include');
const rename = require('gulp-rename');
const yargs = require('yargs');
const fs = require('fs');

const dir = (() => {
  const dir = yargs.argv.dir;

  if (!dir)
    throw new Error('Missing [--dir] flag');

  const stats = fs.statSync(path.join(__dirname, dir));

  if (!stats.isDirectory())
    throw new Error(`'${dir}' isn't a directory`);

  return dir;
})();

// Tasks
gulp.task('make-css', () => gulp.src(`./${dir}/css/main.scss`, { base: './' })
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest(__dirname))
);

gulp.task('merge-html', () => {
  const src = path.join(__dirname, `${dir}/templates/layout.html`);
  gulp.src(src)
    .pipe(include({
      prefix: '@@',
      basePath: '@file'
    }))
    .pipe(rename(`${dir}/index.html`))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', () => {
  const base = path.join(__dirname, dir);
  gulp.watch(path.join(base, 'templates/*.html'), ['merge-html']);
  gulp.watch(path.join(base, '**/*.scss'), ['make-css']);
});

gulp.task('default', ['make-css', 'merge-html', 'watch']);
