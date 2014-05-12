var _          = require('lodash'),
	gulp       = require('gulp'),
	connect    = require('connect'),
	config     = require('./config'),
	pkg        = require('./package.json'),
	gp         = require('gulp-load-plugins')();


// CLEAN
gulp.task('clean', function() {
	return gulp.src([config.dir.dist], { read: false })
		.pipe(gp.clean());
});


// HTML
gulp.task('html', function () {
	return gulp.src(config.files.html)
		.pipe(gulp.dest(config.dir.dist));
});


// FONTS
gulp.task('fonts', function(args) {
	return gulp.src(config.files.fonts)
		.pipe(gulp.dest(config.dir.dist + 'fonts/'));
});


// LESS
gulp.task('less', function() {
	return gulp.src(config.dir.less + 'style.less')
		.pipe(gp.less({
			sourceMap: true,
			compress: true
		}))
		.pipe(gp.concat(pkg.name + '.css'))
		.pipe(gulp.dest(config.dir.dist + 'css/'));
});


// JSHINT
gulp.task('jshint', function() {
	gulp.src(config.files.js)
	.pipe(gp.jshint())
    .pipe(gp.jshint.reporter('default'))
    .pipe(gp.jshint.reporter('fail'));

});


// BROWSERIFY
gulp.task('browserify', function() {
	gulp.src(config.files.main)
		.pipe(gp.browserify({
			debug: true
		}))
		.pipe(gp.rename(pkg.name + '.js'))
		.pipe(gp.uglify())
		.pipe(gulp.dest(config.dir.dist + 'js/'));
});


// DEV-SERVER
gulp.task('server', function(next) {
	var server = connect();
	server.use(connect.static(config.server.root))
		.listen(config.server.port, next);
});


// WATCH
gulp.task('watch', ['server'], function() {
	var server = gp.livereload();

	function onChange(file) {
		server.changed(file.path);
	}

	gulp.watch(config.files.html, ['html']);
	gulp.watch(config.files.less, ['less']);
	gulp.watch(config.files.js, ['jshint', 'browserify']);
	gulp.watch(config.dir.dist + '**').on('change', onChange);
});


gulp.task('default', ['clean', 'html', 'fonts', 'less', 'jshint', 'browserify', 'watch']);

