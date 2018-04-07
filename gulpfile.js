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