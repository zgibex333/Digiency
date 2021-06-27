var gulp = require('gulp');
var rename = require('gulp-rename'); 
var sass = require('gulp-sass')(require('sass'));

function sassToCss(done) {
    gulp.src('./scss/styles.scss')
    .pipe(sass({
        errLogToConsole: true
    }))
    .on('error',console.error.bind(console))
    .pipe(rename({}))
    .pipe(gulp.dest('./css/'))
    done();
}

gulp.task(sassToCss); 
//   exports.default = defaultTask