var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require( 'path');
var rename = require('gulp-rename');
var size = require('gulp-size');
var config = require('../config');

gulp.task('svg', function() {
    return gulp
        .src( path.join( config.paths.svg, '**', '*.svg' ) )
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgmin())
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('svg.html'))
        .pipe(size({ title: 'SVG', gzip: config.prod }))
        .pipe(gulp.dest( path.join( config.paths.templates, 'core', 'includes' ) ));
});
