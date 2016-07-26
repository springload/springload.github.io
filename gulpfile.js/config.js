var path = require('path');

var sourcePath = path.join('.', 'static_src');
var distPath = path.join('.', 'static');

var prod = false;

module.exports = {
    prod: prod,

    paths: {
        sass: path.join(sourcePath, 'scss'),
        css: path.join(distPath, 'css'),
        jsSrc: path.join(sourcePath, 'js'),
        js: path.join(distPath, 'js'),
        appName: 'site.js',
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
