const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function buildStyles() {
  return 
};

gulp.task('styles', function(){
    return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
        server: "./"
    });
  gulp.watch('./scss/**/*', gulp.series(['styles']));
  gulp.watch("./*.html", "./*.js").on('change', browserSync.reload);

});