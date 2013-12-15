module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    src: ['Gruntfile.js', 'public/js/**/*.js']
                }
            }
        },
        watch: {
            jshint: {
                files: '<%= jshint.all.files.src %>',
                tasks: ['jshint']
            }
        },
        nodemon: {
              dev: {
                    options: {
                          file: 'server.js',
                          env: {
                                PORT: '9000'
                          }
                    }
              }
        },
        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['jshint', 'concurrent']);
};
