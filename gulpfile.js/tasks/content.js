var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var shell = require('gulp-shell');
var config = require('../config');

gulp.task('content', shell.task([
    'wrangler build ' + config.paths.content + ' ' + config.paths.www + ' --force',
]));
