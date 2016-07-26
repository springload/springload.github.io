var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var browserify = require('browserify');
// var browserifyInc = require('browserify-incremental');
var babelify = require('babelify');
// var envify = require('loose-envify/custom');
// var uglifyify = require('uglifyify');
// var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
// var gutil = require('gulp-util');
// var size = require('gulp-size');
// var bundleCollapser = require('bundle-collapser/plugin');
var source = require('vinyl-source-stream');
// var bs = require('browser-sync').get('main');

// var browserifyInstance = config.prod ? browserify : browserifyInc;
var browserifyTransforms = [
    babelify,
    // [
    //     envify({ NODE_ENV: config.prod ? 'production' : 'development' }),
    //     { global: true },
    // ],
];
// var browserifyPlugins = [];

// if (config.prod) {
//     browserifyTransforms.push([
//         uglifyify,
//         // See https://github.com/hughsk/uglifyify#global-transforms
//         { global: true },
//     ]);

//     browserifyPlugins.push(bundleCollapser);
// }

var bundler = browserify({
    cache: {},
    transform: browserifyTransforms,
    // plugin: browserifyPlugins,
    packageCache: {},
    debug: !config.prod,
    fullPaths: !config.prod,
});

bundler.add(path.resolve(config.paths.jsSrc, config.paths.appName));

gulp.task('js', function() {
    return bundler.bundle()
        .on('error', function handleError(err) {
            console.log(err.message);
            // bs.notify(err.message, 10000);
            this.emit('end');
        })
        .pipe(source(config.paths.appName))
        .pipe(buffer())
        // .pipe(config.prod ? uglify() : gutil.noop())
        // .pipe(size({ title: config.prod ? 'JS' : 'JS (unminified)', showFiles: true, gzip: config.prod }))
        .pipe(gulp.dest(config.paths.js));
        // .pipe(bs.stream());
});
