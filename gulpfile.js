var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('devScss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', gulp.series('devScss'))
})