var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('pug', function() {
  return gulp.src('./src/pug/pages/*.pug')
      .pipe(plugins.pug({
        pretty: true
      }))
      .pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
  return gulp.src('./src/static/sass/main.scss')
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.csso())
      .pipe(plugins.rename('main.min.css'))
      .pipe(gulp.dest('./build/css'));
});