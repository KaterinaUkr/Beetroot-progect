const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const notify = require("gulp-notify");
const autoprefixer = require('gulp-autoprefixer');


gulp.task('autoprefixer', () => {
  gulp.src('./*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./'))
  
    done();
});

gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .on('error', (err) => {
      notify().write(err);
      this.emit('end');
  })
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })

  gulp.watch('./scss/**/*.scss', gulp.series('sass')); 
  gulp.watch("./*.html").on('change', browserSync.reload);

});