//プラグイン設定
var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

//ファイル圧縮
gulp.task("minjs",function(){
	gulp.src(['src/*.js'])
	.pipe(concat("script.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});

//ファイルコピー
gulp.task("copy",function(){
	gulp.src(['src/*.js'])
	.pipe(gulp.dest("js"));
});

//画像圧縮
gulp.task("imagemin",function(){
	gulp.src(['assets/**/*'])
	.pipe(imagemin())
	.pipe(gulp.dest("images"));
});

//ファイル結合
gulp.task("concat",function(){
	gulp.src(['src/*.js'])
	.pipe(concat("script.js"))
	.pipe(gulp.dest("js"));
});

//ファイル結合
gulp.task("concat",function(){
	gulp.src(['src/*.js'])
	.pipe(concat("script.js"))
	.pipe(gulp.dest("js"));
});

//複数のタスク実行
gulp.task("minall", ["imagemin","concat"]);
