/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp');
// var gutil = require('gulp-util');
var sass = require('gulp-sass');

// create a default task and just log a message
gulp.task('something', function() {
  console.log('Gulp is running!');
});

/**
 * Compile Sass.
 */
gulp.task('sass', function() {
    return gulp.src('./app/scss/*.scss') // Create a stream in the directory where our Sass files are located.
    .pipe(sass())                    // Compile Sass into style.css.
    .pipe(gulp.dest('./app/css'));          // Write style.css to the project's root directory.
});

gulp.task('watch', function () {
    gulp.watch('./app/scss/*.scss', gulp.series('sass'));
});
// /**
//  * Watch the Sass directory for changes.
//  */
// gulp.task('watch', function() {
//   gulp.watch('./sass/*.scss', ['sass']);  // If a file changes, re-run 'sass'
// });
