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
      app: '.',
      bower: './bower_components'
    },

    // TASK CONFIGURATION

    //grunt-bower-concat -- Automatic concatenation of installed Bower components (JS and/or CSS) in the right order.
    bower_concat: {

      }
    },
    uglify: {

    }

  });

  //TASKS
  grunt.registerTask('default', ['uglify']);

};

