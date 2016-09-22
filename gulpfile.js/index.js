require('./tasks/watch');
require('./tasks/content');
require('./tasks/svg');
require('./tasks/images');
require('./tasks/css');
require('./tasks/js');

const gulp = require('gulp');

gulp.task('build', ['css', 'js', 'images', 'content']);
gulp.task('default', ['build']);
