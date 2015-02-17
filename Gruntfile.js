// Generated on 2015-02-05 using generator-angular 0.11.0
'use strict';

module.exports = function (grunt) {

    // Grunt-bower-requirejs - Wire up bower dependencies in your requireJS
    grunt.loadNpmTasks('grunt-bower-requirejs');

    // Grunt-requirejs - Concats all of your require files into one
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Grunt-connect - simple host
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Grunt-watch - triggers require build as you code
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Config
    grunt.initConfig({
        bower: {
            target: {
                rjsConfig: 'app/config.js'
            },
            options: {
                'exclude-dev': true,
                transitive: true
            }
        },

        requirejs: {
            compile: {
                // !! You can drop your app.build.js config wholesale into 'options'
                options: {
                    appDir: "app/",
                    baseUrl: "./",
                    dir: "target/",
                    optimize: 'none',
                    mainConfigFile:'./app/config.js',
                    modules:[
                        {
                            name: 'scripts/app'
                        }
                    ],
                    logLevel: 0,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^(r|build)\.js$|\.min\./,
                    inlineText: true,
                    optimizeCss: "default"
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: false,
                    base: "target"
                }
            }
        },

        watch: {
            scripts: {
                files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.css'],
                tasks: ['requirejs'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', [
        'bower', 'requirejs'
    ]);
};
