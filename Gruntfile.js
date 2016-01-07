module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-bower-concat');
    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),
        bower_concat: {
            all: {
                dest: 'build/_bower.js',
                cssDest: 'build/_bower.css',
                include: [
                'underscore',
                'jquery-mousewheel',
                'jquery',
                'bootstrap'
                ],
                dependencies: {
                    'underscore': 'jquery',
                    'jquery-mousewheel': 'jquery',
                    'bootstrap': 'jquery'
                },
                bowerOptions: {
                    relative: false
                }
            }
        }
    }
    grunt.initConfig(grunt.util._.extend(taskConfig));
};
