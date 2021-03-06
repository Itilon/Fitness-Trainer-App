const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', () => {
    return require('./server');
});

gulp.task('dev', () =>{
    return nodemon({
        ext: 'js',
        script: 'server.js'
    });
});