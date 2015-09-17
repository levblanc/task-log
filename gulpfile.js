'use strict';

var _            = require('lodash');
var fs           = require('fs');
var path         = require('path');
var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var changed      = require('gulp-changed');
var plumber      = require('gulp-plumber');
var nodemon      = require('gulp-nodemon');
var copy         = require('gulp-copy');
var cssmin       = require('gulp-cssmin');
var uglify       = require('gulp-uglify');
var mkdirp       = require('mkdirp');
var del          = require('del');
var runSequence  = require('run-sequence');
var browserify   = require('browserify');
var jadeify      = require('jadeify');
var browserSync  = require('browser-sync');
var source       = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var nib          = require('nib');

var serverPort = 6290;
var production = (process.env.NODE_ENV === 'production');

/**
 * 找出bower中的依赖库
 */
function getBowerPkgIds(){
    var bowerManifest = {};

    try{
        bowerManifest = require('bower.json');
    }catch(e){
        console.log(e);
    }

    var bowerPkgIds = _.keys(bowerManifest.dependencies) || [];

    // 由于underscore是下载backbone时自动一并下载的，
    // bower.json的dependencies对象中没有，
    // 所以手动加上
    if(bowerPkgIds.length) bowerPkgIds.push('underscore');

    return bowerPkgIds;
}

/**
 * 编译Stylus
 */
gulp.task('stylus', function () {
    gulp.src('app/assets/css/**/*.styl')
        .pipe(plumber())
        .pipe(changed('app/assets/css/'))
        .pipe(stylus(
            { use: [nib()] }
        ))
        .pipe(gulp.dest('app/assets/css/'))
        // .pipe(server())
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * 打包/app/assets/js/libs文件夹下的库
 */
gulp.task('bundleVendors', function () {
    // this task will go through ./bower.json and
    // uses bower-resolve to resolve its full path.
    // the full path will then be added to the bundle using require()

    var b = browserify({
      // generate source maps in non-production environment
      debug: !production
    });

    // get all bower components ids and use 'bower-resolve' to resolve
    // the ids to their full path, which we need for require()
    getBowerPkgIds().forEach(function (id) {
      var resolvedPath = bowerResolve.fastReadSync(id);

      b.require(resolvedPath, {

        // exposes the package id, so that we can require() from our code.
        // for eg:
        // require('./vendor/angular/angular.js', {expose: 'angular'}) enables require('angular');
        // for more information: https://github.com/substack/node-browserify#brequirefile-opts
        expose: id

      });
    });

    var stream = b.bundle().pipe(source('app/assets/js/vendor.js'));

    // 如果是跟source同一个文件夹下，dest为相对source文件的路径
    stream.pipe(gulp.dest('./'));

    return stream;
});

/**
 * 编译Js文件
 */
gulp.task('bundleJsFiles', function (){
    // 只需要告诉browserify入口文件，它就能自动找到文件之间的关联
    // 把相关的文件都打包起来
    var appPath = path.join(__dirname, 'app/assets/js/app.js');

    var b = browserify(appPath, {
        // generate source maps in non-production environment
        debug: !production
    });

    getBowerPkgIds().forEach(function (lib) {
        b.external(lib);
    });

    var stream = b.transform(jadeify, { compileDebug: true, pretty: true })
                .bundle()
                .pipe(plumber())
                .pipe(source('./app/assets/js/main.js'))
                .pipe(gulp.dest('./'))
                // .pipe(server())
                .pipe(browserSync.reload({ stream: true }));

    return stream;
});

/**
 * watch任务 监听文件变化
 */
gulp.task('watch', function () {
    gulp.watch("app/index.html").on('change', browserSync.reload);
    gulp.watch("app/assets/css/**/*.styl", ['stylus']);
    gulp.watch("app/components/**/*.jade", ['bundleJsFiles']);
    gulp.watch("app/components/**/*.js", ['bundleJsFiles']);
    gulp.watch("app/shared/**/*.js", ['bundleJsFiles']);
    gulp.watch(["app/assets/js/app.js", "app/assets/js/router.js"], ['bundleJsFiles']);
});

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var browserSyncLoadDelay = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

    // nodemon will start our expressjs server
    script: 'server.js',
    // watch core server file(s) that require server restart on change
    watch: ['server.js', 'gulpfile.js']
  })
    .on('start', function () {
      // ensure start only got called once
    //   if (!called) { cb(); }
      if (!called) {
        setTimeout(function () {
            browserSync.init({
                proxy: 'http://localhost:' + serverPort,
                port: 4000
            });
        }, browserSyncLoadDelay);
      }

      called = true;
    })
    .on('restart', function () {
        console.log('========== restarting server ...... ==========');
      // reload connected browsers after a slight delay
        setTimeout(function () {
            browserSync.reload({
                stream: false
            });
        }, browserSyncLoadDelay);
    })
    .on('crash', function () {
        console.log('========== app crashed, restarting server ==========');
    });
});


/**
 * cleanDist任务
 * 清除dist文件夹及其中的所有内容
 */
gulp.task('cleanDist', function () {
    return del('dist/**/*').then(function (paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

/**
 * copy任务
 * 把最终需要用到的文件复制到dist文件夹下
 */
gulp.task('copy', function () {
    return gulp.src([
            './server.js',
            'app/index.html',
            'app/assets/css/main.css',
            'app/assets/js/*'
        ])
        .pipe(copy('dist/'));
});

/**
 * mkdirs任务
 * 创建数据库文件夹db
 * 创建csv文件夹
 */
gulp.task('mkdirs', function () {
    _.each(['dist/app/db', 'dist/app/csv'], function (dir, index) {
        return mkdirp(dir, function (err) {
            if(err) console.error(err);
            else console.dir(dir + ' created');
        });
    });
});

/**
 * createDBfiles任务
 * 创建json文件作为本地数据储存
 */
gulp.task('createDBfiles', function () {
    _.each([
        'dist/app/db/taskLog.json',
        'dist/app/db/user.json',
        'dist/app/db/userLogList.json'
    ], function (file, index) {
        return fs.writeFile(file, '', function (err) {
            if(err) console.error(err);
            else console.dir(file + ' created');
        });
    });
});

/**
 * cssmin任务
 * 压缩css代码
 */
gulp.task('cssmin', function () {
    return gulp.src('dist/app/assets/css/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/app/assets/css/'));
});

/**
 * uglify任务
 * 压缩js文件
 */
gulp.task('uglify', function () {
    return gulp.src('dist/app/assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/app/assets/js/'));
});

/**
 * 开发用default任务
 */
gulp.task('default', ['nodemon', 'watch']);

/**
 * production文件夹创建
 */
gulp.task('dist', function (cb) {
    runSequence(
        'cleanDist',
        ['copy', 'mkdirs'],
        ['cssmin', 'uglify'],
        'createDBfiles',
        cb);
});
