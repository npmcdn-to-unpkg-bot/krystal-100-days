var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Styles
gulp.task('styles', function() {
  console.log('starting styles task');
});

// Scripts

gulp.task('scripts', function() {
  return gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

// Images
gulp.task('images', function() {
  console.log("Images")
});

gulp.task('default', function() {
  console.log('Starting default task')
});