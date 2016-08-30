require('./tasks/content');
require('./tasks/css');
require('./tasks/js');

var gulp = require('gulp');

gulp.task('build', ['css', 'js', 'content']);

gulp.task('default', ['build']);
