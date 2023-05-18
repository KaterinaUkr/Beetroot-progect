const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
// const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// function buildStyles() {
//   return 
// };

gulp.task('minify-css', () => {
  return gulp.src('./style.css')
    // .pipe(sourcemaps.init())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function(){
    return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 5 version'],
        cascade: false
      }))
      // .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
        server: "./"
  });
  
  gulp.watch('./scss/**/*', gulp.series(['styles', 'minify-css']));  
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./*.js").on('change', browserSync.reload);
});