'use strict';

var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rigger = require('gulp-rigger'),
  minify = require('gulp-minify'),
  browserSync = require('browser-sync').create();


sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('../css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(rigger())
    .pipe(minify())
    .pipe(gulp.dest('../js'))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
  return gulp.src('src/img/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest('../img'))
});

gulp.task('browser-sync', ['sass', 'js'], function() {
  browserSync.init({
    proxy: "moneyworlddaily.loc",
    port: 8080
  });
});

gulp.task('default', ['browser-sync', 'sass', 'images', 'js'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/img/**', ['images']);
  gulp.watch('src/js/**/*.js', ['js']);

  // gulp.watch('src/scss/**/*.scss').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('../partials/**/*.php').on('change', browserSync.reload);
  gulp.watch('../templates/**/*.php').on('change', browserSync.reload);
});