'use strict';
module.exports = function(grunt) {

grunt.initConfig({
	compass: {
		dist: {
			options: {
				basePath: 'src/',
				config: 'src/config.rb',
				cssDir: 'css',
				environment: 'production'
			}
		}
	},
	copy: {
		main: {
			files: [
				{expand: true, cwd: 'src/img/', src: ['**'], dest: 'production/img/'},
				{expand: true, cwd: 'src/css/', src: ['screen.css'], dest: 'production/css/'},
				{expand: true, cwd: 'src/js/', src: ['**'], dest: 'production/js/'}
			]
		},
		css: {
			files: [
				{expand: true, cwd: 'src/img/', src: ['**'], dest: 'production/img/'},
				{expand: true, cwd: 'src/css/', src: ['**'], dest: 'production/css/'},
			]
		},
		js: {
			files: [
				{expand: true, cwd: 'src/js/', src: ['**'], dest: 'production/js/'}
			]
		}
	},
	includereplace: {
		dist: {
			options: {
				prefix: '@@',
				suffix: ''
			},
			src: 'src/*.html',
			dest: 'production/'
		}
	},
	csso: {
		dist: {
			src: 'src/css/screen.css',
			dest:'production/css/screen.min.css'
		}
	},
	watch: {
		css: {
			files: 'src/sass/*.scss',
			tasks: ['compass','copy:css','clean:css'],
		},
		js: {
			files: 'src/js/*.js',
			tasks: ['copy:js'],
		},
		html: {
			files: 'src/*html',
			tasks: ['includereplace', 'clean:html'],
		},
	},
	clean: {
		html: ["production/_*.html"],
		css: ["production/css/lib", "src/css"],
		dev: ["production/_*.html", "production/css/lib", "src/css"],
		release: ["production"],
		after: ["production/_*.html", "src/css", "production/img/icons"]
	}
});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-csso');

	grunt.registerTask( 'default', ['watch']);
	grunt.registerTask( 'release', ['clean:release', 'compass', 'copy:main', 'includereplace', 'csso', 'clean:after']);

};