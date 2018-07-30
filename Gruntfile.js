module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*
        *SASS TASK
        */
        sass:{
            dev:{
                options:{
                    style:'expanded',
                    sourcemap:'none',
                },
                files:{
                    'process/css/style.css' : 'process/sass/style.scss',
                }
            },
            dist:{
                options:{
                    style:'compressed',
                    sourcemap:'none',
                },
                files:{
                    'process/css/style.min.css' : 'process/sass/style.scss',
                }
            }
        },
        
        /*
        *AUTOPREFIXER TASK
        */
        autoprefixer: {
            options: {
                browsers:['last 2 versions'],
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src:'process/css/*.css',
                dest:'builds/copycat/css',
            },
        },
        
        /*
        *CONNECT TASK
        */
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    base: 'builds/copycat/',
                    livereload: true
                }
            }
        },
        
        /*
        *WATCH TASK
        */
        watch:{
            options:{
                livereload: true
            },
            css:{
                files: '**/*.scss',
                tasks: ['sass','autoprefixer'],
            },
            html:{
                files: 'builds/copycat/*.html',
                tasks:['connect']
            }
        }
        
    
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express-server');
    
    grunt.registerTask('default', ['connect','watch']);
};