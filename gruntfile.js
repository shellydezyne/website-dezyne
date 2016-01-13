module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify : {
            my_target : {
                files: {
                    'resources/js/script.js' : ['resources/components/js/*.js']
                } // files
            } // my_target
        }, // uglify
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } // options
            } // dev
        }, // compass
        watch: {
            options: { livereload: true },
            scripts: {
                files: ['resources/components/js/*.js'], 
                tasks: ['uglify']
            }, // scripts
            sass: {
                files: ['resources/components/sass/*.scss'],
                tasks: ['compass:dev']
            }, // sass
            html : {
                files: ['*.html']
            }
        }// watch
    }) // initConfig
    grunt.registerTask('default', 'watch'); // auto watch
} // exports 