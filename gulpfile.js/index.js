require('./tasks/watch');
require('./tasks/content');
require('./tasks/svg');
require('./tasks/css');
require('./tasks/js');

var gulp = require('gulp');

gulp.task('build:assets', [ 'css', 'js', 'svg']);
gulp.task('build', ['build:assets', 'content']);

gulp.task('default', ['build']);
