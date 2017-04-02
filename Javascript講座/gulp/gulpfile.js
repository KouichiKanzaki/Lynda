//プラグイン設定
var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

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

//sassコンパイル
gulp.task("sass",function(){
	gulp.src(['sass/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest("sass"));
});

//autoprefixer
gulp.task("sass-pre",function(){
	gulp.src(['sass/*.scss'])
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest("css/"));
});

//複数のタスク実行
gulp.task("minall", ["imagemin","minjs"]);

//監視
gulp.task("default", function(){
	gulp.watch(['assets/**/*', ], ['minall']);
	gulp.watch(['src/*.js'], ["minjs"]);
});

//browserSync
gulp.task("browser-sync", function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch(['*.html']).on("change", browserSync.reload);
});