var gulp = require('gulp');
var scss = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
const gulpif = require('gulp-if');
var notify = require('gulp-notify');
var bs = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');

gulp.task('pug', function() {
    return gulp.src('src/pug/index.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: "Markup",
                    message: err.message
                };
            })
        }))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
})

gulp.task('styles', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'HTML',
                    message: err.message
                };
            })
        }))
        .pipe(scss({ output: 'expanded' }))
        // .pipe(concat('./src/scss/libs/font-awesome.css'))
        .pipe(gulp.dest('dist'))
})

gulp.task('copy:img', function() {
    return gulp.src('src/img/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(gulp.dest('dist/img'))
})

gulp.task('copy:fonts', function() {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})

/**
 *  Concat all scripts and make sourcemap (optional)
 *  Scripts from vendor folder added first
 *  Объединяем все скрипты в один файл и делаем карту (опционально)
 *  Скрипты из папки vendor добавляются в первую очередь
 */
// gulp.task('javascript', function () {
// 	return gulp.src()
// 	.pipe(plumber())
// 	.pipe(gulpif(true, sourcemaps.init()))
// 	.pipe(gulpif(true, babel({
// 		presets: ['@babel/preset-env']
// 	})))
// 	.pipe(concat('script.js'))
// 	.pipe(gulpif(true, uglify()))
// 	.pipe(gulpif(true, sourcemaps.write('../maps')))
// 	.pipe(gulp.dest('dist/js'))
// 	.pipe(browserSync.reload({
// 		stream: true
// 	}));
// });

// gulp.task('javascript-vendor', function () {
// 	return gulp.src('src/scripts/**/*.js')
// 	.pipe(plumber())
// 	.pipe(sourcemaps.init())
// 	.pipe(babel({
// 		presets: ['@babel/preset-env']
//     }))
//     .pipe(concat('script.min.js'))
// 	.pipe(sourcemaps.write('.'))
// 	.pipe(gulp.dest('dist/js'))
// });

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'))
    // gulp.watch('src/scripts/vendor/**/*.js', gulp.series('javascript-vendor'))
    // gulp.watch('src/scripts/vendor/**/*.js', gulp.series('javascript'))
    gulp.watch('src/pug/*.pug', gulp.series('pug'))
    gulp.watch('src/img/*', gulp.series('copy:img'))
    gulp.watch(['src/scss/**/*.scss', 'src/pug/index.pug', 'src/img/**/*.{png,jpg,jpeg,gif,svg}']).on('change', bs.reload)
})
// , 'src/scripts/**/*.js'
gulp.task('bs', function() {
    bs.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('default', gulp.parallel(
    gulp.series('styles', 'pug', 'copy:img', 'copy:fonts', 'watch'),
    'bs'
))
