module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-jsxhint');
    grunt.config('jshint', {
        options: {
            jshintrc: true
        },
        js: ['./lib/**/*.js'],
        jsx: ['./lib/**/*.jsx']
    });
};