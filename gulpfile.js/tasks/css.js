// ----------------------------------------------------------------------------
// CSS
// ----------------------------------------------------------------------------

var config = require("../config");
var gulp = require('gulp');
var path = require('path');

var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
// var gutil = require('gulp-util');
// var plz = require("gulp-pleeease");
var size = require('gulp-size');
// var bs = require('browser-sync').get('main');

var sourceFiles = path.join( config.paths.sass, '**', "*.scss" );

gulp.task('css', function() {
    return gulp.src(sourceFiles, { base: config.paths.sass })
        // .pipe(config.prod ? gutil.noop() : sourcemaps.init())
        .pipe(sass())
        .on('error', function handleError(err) {
            console.log(err.message);
            // bs.notify(err.message, 10000);
            this.emit('end');
        })
        // .pipe(plz( config.PlzOptions ))
        // .pipe(config.prod ? gutil.noop() : sourcemaps.write())
        .pipe(size({ title: config.prod ? 'CSS' : 'CSS (unminified)', showFiles: true, gzip: config.prod }))
        .pipe(gulp.dest( config.paths.css ));
        // .pipe(bs.stream());
});
