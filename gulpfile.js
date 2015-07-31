var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


/* run the watch task when gulp is called without arguments */
/*gulp.task('default', ['watch']);*/


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



/* Watch these files for changes and run the task on update */
/*gulp.task('watch', function() {
   gulp.watch("*.html").on('change', browserSync.reload);
});*/