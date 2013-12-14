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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint', 'watch']);
};
