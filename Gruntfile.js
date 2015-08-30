module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': false,
		            'style-disabled': false
		        },
		        src: ['index.html'],
		        src: ['404.html']
		    }
		},

		htmlmin: {                                     // Task
		    build: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'build/index.html': 'index.html',
		        'build/404.html': '404.html'     // 'destination': 'source'
		      }
		    }
		},

		uglify: {
		    build: {
		        files: {
		            'build/general.js': ['js/general.js']
		        }
		    }
		},

		cssc: {
		    build: {
		        options: {
	        	    sortSelectors: true,
                    lineBreaks: true,
                    sortDeclarations:true,
		            consolidateViaDeclarations: true,
		            consolidateViaSelectors:    false,
		            consolidateMediaQueries:    true,
		        },
		        files: {
		            'build/style.css': 'css/style.css'
		        }
		    }
		},

		cssmin: {
		    build: {
		        src: 'build/style.css',
		        dest: 'build/style.css'
		    }
		},

		watch: {
		    html: {
		        files: ['index.html' , '404.html'],
		        tasks: ['buildhtml']
		    },
		    js: {
		        files: ['js/general.js'],
		        tasks: ['uglify']
		    },
	        css: {
		        files: ['css/style.css'],
		        tasks: ['buildcss']
		    }
		}

    });

    grunt.registerTask('default', []);
	grunt.registerTask('buildhtml',  ['htmlhint', 'htmlmin']);
	grunt.registerTask('buildcss',  ['cssc', 'cssmin']);


};