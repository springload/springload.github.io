var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var bs = require('browser-sync').create('main');

gulp.task('watch', ['build'], function() {
    bs.init({
        open: true,
        server: config.paths.www,
    });

    var contentReload = [
        'wrangler.yaml',
        path.join(config.paths.content, '**', '*.{yml,json,md}'),
        path.join(config.paths.templates, '**', '*.html'),
    ];

    gulp.watch(contentReload, ['content']);
    gulp.watch(path.join(config.paths.imagesSrc, '*.{png,gif,jpg,jpeg,svg}'), ['images']);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
    gulp.watch(path.join(config.paths.jsSrc, '**', '*.js'), ['js']);
    gulp.watch(path.join(config.paths.www, '**', '*.html'), bs.reload);
});
