const gulp = require('gulp');
const shell = require('gulp-shell');
const config = require('../config');

const options = {
    ignoreErrors: !config.prod,
};

gulp.task('content', ['svg'], shell.task([
    `wrangler build ${config.paths.content} ${config.paths.www} --force`,
    `sed -i.bak -e 's/UA-XXXXXXX-X/${config.values.GOOGLE_ANALYTICS}/g' ${config.paths.www}/*.html && rm ${config.paths.www}/*.bak`
], options));

