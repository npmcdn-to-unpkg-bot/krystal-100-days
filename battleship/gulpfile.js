var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

//File paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/js/**/*.js';
var STYLES_PATH = 'public/css/**/*.css';

//Styles
gulp.task('styles', function(){
  console.log('Starting styles task');
  return gulp.src('public/scss/styles.scss')
    .pipe(plumber(function(err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
          outputStyle: 'compressed'
     }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload())
});

//JS
gulp.task('scripts', function(){
  console.log('Starting scripts task');
  
  return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

gulp.task('default', function() {
  console.log('Starting default task');
});

gulp.task('watch', function() {
  console.log('Starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch('public/scss/**/*.scss', ['styles']);
});

