var gulp = require('gulp');
/// 用于删除对应文件夹
var rimraf = require('gulp-rimraf');
/// gulp任务流执行顺序
var sequence = require('gulp-sequence');
///  常用于输出调试信息
var gutil = require('gulp-util');

var baseConfig = require('./config/base.config');

gulp.task('clean' , sequence(['clean:build','clean:dist']));

gulp.task('clean:build' , function(){
    gutil.log('Deleting build folder');
    return gulp.src(baseConfig.dir.build)
        .pipe(rimraf());
});

gulp.task('clean:dist', function(){
    gutil.log('Deleting dist folder');
    return gulp.src(baseConfig.dir.dist)
        .pipe(rimraf());
});

