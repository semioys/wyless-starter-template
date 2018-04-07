var gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('src/pug/pages/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('build'));
});