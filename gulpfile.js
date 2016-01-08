var gulp = require('gulp'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload');

	/*gulp.task('browserify',function(){
		gulp.src('./src/main.js')
		.pipe(browserify({}))
		.pipe(gulp.dest('./build/bundle.js'));
	});*/

	gulp.task('connect',function(){
		connect.server({
			root:'./',
			port:8888,
			livereload:true
		});
	});

	gulp.task('html',function(){
		gulp.src('./index.html').pipe(livereload());
	});

	gulp.task('watch',function(){
		livereload.listen();
		gulp.watch('./index.html',['html']);
	});

	gulp.task('default',['connect','watch']);