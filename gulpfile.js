var gulp = require('gulp');
var browserSync = require('browser-sync').create();
/**
 * gulp postcss : https://www.npmjs.com/package/gulp-postcss
 */
var postcss = require('gulp-postcss');

var cssnext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');

var input = './src/css/*.css';
var output = './dest/css';

// browserSync server
gulp.task('serve', function() {
    browserSync.init({
        server: "./dest"
    });
    gulp.watch(input, ['style']);
    gulp.watch('./dest/**').on('change', browserSync.reload);
});

// gulp-postcss config
gulp.task('style', function() {
     var processors = [
        cssnext,
        autoprefixer
   ]
    return gulp.src(input)
         .pipe(postcss(processors))
         .pipe(gulp.dest(output))
});
gulp.task('default', ['serve']);