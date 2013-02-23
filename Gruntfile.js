module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({

		// LESS
		less: {
			development: {
				files: {
					"app/css/global.css": "app/css/*.less"
				}
			}
		},

		// JSHINT
		jshint: {
			files: ['app/js/*.js', 'app/js/**/*.js', 'Gruntfile.js',
			'test/*Spec.js', 'test/**/*Spec.js']
		},

		watch: {
			files: ['<%= jshint.files %>', 'app/css/*.less'],
			tasks: ['jshint', 'concat', 'less']
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: 'app',
					keepalive: true
				}
			}
		},

		concat: {
			options: {
				separator: ";"
			},
			dist: {
				src: ['app/js/*.js', 'app/js/**/*.js'],
				dest: 'app/.dist-js/main.js'
			}
		}

	});

};
