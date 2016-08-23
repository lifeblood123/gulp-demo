var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-uglifycss')
//1.压缩js到build目录
//2.编译sass文件为css文件，并复制到b

//gulp.task('js',function(){
  //  gulp.src('src/script/**/*.js')//**  匹配下面的任意文件夹
    //    .pipe(uglify())
      //  .pipe(gulp.dest('build/script'));
///})
gulp.task('js',function(){
 gulp.src('src/script/**/*.js')//**  匹配下面的任意文件夹  src 可以写数组 k
  .pipe(uglify())
     .pipe(concat('combo.js'))
 .pipe(gulp.dest('build/script'));
});
gulp.task('css',function(){
    gulp.src('src/style/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('build/style'));


});
gulp.task('minify',function(){
    gulp.src('src/style/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('build/style'));
})
gulp.task('build',['js','css'],function(){
    console.log('我完成任务了');
});
//写default  直接输入命令gulp  就默认执行了

gulp.task('default',['js','css'],function(){
    console.log('我完成任务了');
});


