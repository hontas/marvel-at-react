module.exports = {
	dir: {
		src: 'src/',
		dist: 'build/',
		less: 'src/less/',
		js: 'src/js/'
	},

	files: {
		html: 'src/*.html',
		less: 'src/less/**/*.less',
		js: 'src/js/**/*.js',
		main: 'src/js/main.js',
		fonts: ['src/vendor/font-awesome/fonts/*']
	},

	server: {
		root: 'build/',
		port: 3000
	}
};