   module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');//add plugins for all tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify : {
            my_target : {
                files: {
                    '_/js/script.js' : ['_/components/js/*.js']
                } // files
            } // my_target
        }, // uglify
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } // options
            } // dev means development
        }, // compass
        watch: {
            options: { livereload: true },
            scripts: {
                files: ['_/components/js/*.js'], //to change all js files automatically
                tasks: ['uglify']
            }, // scripts
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            }, // sass
            html : {
                files: ['*.html']//to change all js files automatically
            }
        }// watch
    }); // initConfig
    grunt.registerTask('default', 'watch'); // auto watch
}; // exports 