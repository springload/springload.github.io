var path = require('path');

var rootPath = '.';
var sourcePath = path.join('.', 'static_src');
var distPath = path.join('.', 'static');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    prod: prod,

    paths: {
        content: path.join(rootPath, 'content'),
        templates: path.join(rootPath, 'templates'),
        sass: path.join(sourcePath, 'scss'),
        css: path.join(distPath, 'css'),
        jsSrc: path.join(sourcePath, 'js'),
        js: path.join(distPath, 'js'),
        appName: 'site.js',
        www: path.join(rootPath, 'www'),
    },

    PlzOptions: {
        minifier: prod,
        mqpacker: false,
        filters: false,
        rem: true,
        pseudoElements: true,
        opacity: true,
        autoprefixer: {
            browsers: ['ie 8', 'ie 9', '> 1%']
        }
    }
};
