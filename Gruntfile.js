module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    src: ['Gruntfile.js', 'js/**/*.js']
                }
            }
        },
        watch: {
            jshint: {
                files: '<%= jshint.all.files.src %>',
                tasks: ['jshint']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint', 'connect', 'watch']);
};
