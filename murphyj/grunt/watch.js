module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        tests: {
            files: ['lib/**/*.js','test/**/*.js'],
            tasks: ['jasmine_node', 'jshint']
        }
    });
};