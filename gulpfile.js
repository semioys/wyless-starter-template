var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    rimraf = require('rimraf');

gulp.task('pug', function() {
  return gulp.src('./src/templates/index.pug')
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
  return gulp.src('./src/static/sass/main.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on("error", plugins.notify.onError({
      message: "Error: <%= error.message %>",
      title: "Error with compilling sass"
    }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 4 versions']
    }))
    .pipe(plugins.csso())
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('clean', function(cb) {
  return rimraf('./build', cb);
});

gulp.task('watch', function() {
  gulp.watch('./src/templates/**/*.pug', gulp.series('pug'));
  gulp.watch('./src/static/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('pug', 'sass'),
  'watch' 
));