const config = require('../config');
const gulp = require('gulp');
const path = require('path');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');
const bs = require('browser-sync').get('main');

gulp.task('images', ['images:favicons'], () => {
    return gulp
        .src(path.join(config.paths.imagesSrc, '*.{png,gif,jpg,jpeg,svg}'))
        .pipe(imagemin())
        .pipe(size({ title: 'Images', gzip: true }))
        .pipe(gulp.dest(config.paths.www))
        .pipe(bs.stream());
});

// Separate task because we want to drop favicon files directly into the web root.
gulp.task('images:favicons', () => {
    return gulp
        .src(path.join(config.paths.imagesSrc, 'favicons', '*'))
        .pipe(imagemin())
        .pipe(size({ title: 'Favicons', gzip: true }))
        .pipe(gulp.dest(config.paths.www))
        .pipe(bs.stream());
});
