module.exports = function(grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    config: {
      // Configurable paths
      app: './app'
      //bower: './bower_components'
    },

    // TASK CONFIGURATION

    //grunt-bower-concat -- Automatic concatenation of installed Bower components (JS and/or CSS) in the right order.
    bower_concat: {
      all: {
        dest: '<%= config.app %>/scripts/_bower.js',
        cssDest: '<%= config.app %>/styles/_bower.css',
        /*exclude: [
          'jquery',
          'leaflet'
        ],*/
        dependencies: {
          'underscore': 'jQuery',
          'leaflet': ['jQuery', 'underscore']
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= config.app %>/scripts/_bower.js',
        dest: '<%= config.app %>/scripts/_bower.min.js'
      }
    }

  });

  //TASKS
  //grunt.registerTask('default', ['uglify']);

  //WORKS --> Concatenate all JS and CSS files from Bower, minify _bower.js
  grunt.registerTask('bower-assets', ['bower_concat:all', 'uglify']);

};