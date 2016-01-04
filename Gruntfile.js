module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['src/js/*.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'build/<%= pkg.name %>.min.css' : 'src/css/*.css'
        }
      }
    },
    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '/* <%= pkg.name %>\nhttps://github.com/dan-silver/ElementTransitions.js %> */\n',
          linebreak: true
        },
        files: {
          src: ['build/*']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-banner');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'usebanner']);

};