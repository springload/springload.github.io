const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('../config');

gulp.task('content', shell.task([
    `wrangler build ${config.paths.content} ${config.paths.www} --force`,
]));

