module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.registerTask('test', ['jasmine_node', 'jshint']);
    grunt.loadTasks('grunt');
};