var gulp        = require( 'gulp' );
var browserify  = require( 'browserify' );
var source      = require( 'vinyl-source-stream' );
var uglify      = require('gulp-uglify-es').default;;
var streamify   = require( 'gulp-streamify' );

gulp.task( 'browserify', function() {
    return browserify( './index.js' )
        .bundle()
        .pipe( source( 'vip-js-sdk.js' ) )
        .pipe( streamify( uglify() ) )
        .pipe( gulp.dest( './dist/' ) );
});
