module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['src/js/*.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
        my_target: {
            src: 'src/css/*.css',
            dest: 'build/<%= pkg.name %>.css'
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};