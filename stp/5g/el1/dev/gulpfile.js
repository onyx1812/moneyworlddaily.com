const gulp 			= require('gulp');
const plumber 		= require('gulp-plumber');
const browserSync 	= require('browser-sync').create();
const rename 		= require('gulp-rename');
const sass 			= require('gulp-sass');
const autoprefixer 	= require('autoprefixer');
const postcss 		= require('gulp-postcss');
const imagemin 		= require('gulp-imagemin');
const browserify 	= require('browserify');
const buffer 		= require('vinyl-buffer');
const uglify		= require('gulp-uglify');
const source		= require('vinyl-source-stream');
const babelify		= require('babelify');
const sourcemaps	= require('gulp-sourcemaps');

const jsSRC = 'main.js';
const jsFOLDER = 'src/js/'
const jsDIST = 'dist/js/';
const jsWATCH = 'src/js/**/*.js';
const jsFILES = [jsSRC];


// compress images
function images() {
	return gulp.src('./src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'));
}

// compile scss into css
function style() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe( postcss([autoprefixer()]) )
		.pipe(rename({
			extname: '.css',
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.stream())
}

// compile js files
// function scripts() {
// 	jsFILES.map(function( entry ) {
// 		return browserify ({
// 			entries: [jsFOLDER + entry],
// 			debug: true,
// 		})
// 		.transform( babelify, { presets: ['@babel/preset-env'] })
// 		.bundle()
// 		.pipe( source(entry) )
// 		.pipe( rename({ 
// 			extname: '.js',
// 			suffix: '.min' 
// 		}) )
// 		.pipe( buffer() )
// 		.pipe( sourcemaps.init({ loadMaps: true }) )
// 		.pipe( uglify() )
// 		.pipe( sourcemaps.write( './' ) )
// 		.pipe( gulp.dest( jsDIST ) )
// 		.pipe(browserSync.stream())
// 	})
// }
function scripts() {
	return browserify({
			entries: './src/js/main.js',
			debug: true
		})
		.transform( babelify, {
			presets:[
				["@babel/preset-env"]
			]
		})
		.bundle()
		.pipe( source('main.min.js') )
		.pipe( buffer() )
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write('./maps'))
		.pipe( gulp.dest( jsDIST ) )
		.pipe( browserSync.stream() );
}

// watch files
function watch() {
	browserSync.init({
		server: {
			baseDir: './dist'
		}	
	});
	gulp.watch('./src/scss/**/*.scss', style);
	gulp.watch(jsWATCH, scripts);
	gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.scripts = scripts;
exports.watch = watch;
exports.images = images;