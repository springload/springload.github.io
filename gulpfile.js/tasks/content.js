const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('../config');

gulp.task('content', ['svg'], shell.task([
    `wrangler build ${config.paths.content} ${config.paths.www} --force`,
    // `sed -i s/UA-XXXXXXX-X/${config.values.GOOGLE_ANALYTICS}/g ${config.paths.www}/*.html`,
]));

