require('./tasks/css');
require('./tasks/js');

var gulp = require('gulp');

gulp.task('build', ['css', 'js']);

gulp.task('default', ['build']);
