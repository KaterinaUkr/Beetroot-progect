const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

// function buildStyles() {
//   return 
// };

gulp.task('minify-css', () => {
  return gulp.src('./style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function(){
    return gulp.src('./scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
        server: "./"
  });
  
  gulp.watch('./scss/**/*', gulp.series(['styles', 'minify-css']));
  // gulp.watch("./*.html", "./*.js").on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});