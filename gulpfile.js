'use strict';

var _            = require('lodash');
var fs           = require('fs');
var path         = require('path');
var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var plumber      = require('gulp-plumber');
// var server    = require('gulp-develop-server');
var nodemon      = require('gulp-nodemon');
var browserify   = require('browserify');
var jadeify      = require('jadeify');
var browserSync  = require('browser-sync');
var source       = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var nib          = require('nib');

var serverPort = require('./portConfig');
var production = (process.env.NODE_ENV === 'production');

/**
 * 找出bower中的依赖库
 */
function getBowerPkgIds(){
    var bowerManifest = {};

    try{
        bowerManifest = require('./bower.json');
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


var options = {
    server: {
        path: './server.js'
    },
    browserSync: {
        proxy: 'http://localhost:' + serverPort,
        port: 4000
    }
};

/**
 * 启动server
 */
gulp.task('server:start', function () {
    server.listen(options.server, function(error) {
        if(!error) browserSync(options.browserSync);
    });
});

/**
 * 如果app.js有变动，重启server并刷新browser
 */
gulp.task('server:restart', function () {
    server.restart(function(error) {
        if(!error){
            browserSync.reload();
        }else{
            browserSync(options.browserSync);
        }
    });
});

/**
 * 编译Stylus
 */
gulp.task('stylus', function () {
    gulp.src('./app/assets/css/**/*.styl')
        .pipe(plumber())
        .pipe(stylus(
            { use: [nib()] }
        ))
        .pipe(gulp.dest('./app/assets/css/'))
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

    var stream = b.bundle().pipe(source('./app/assets/js/vendor.js'));

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
 * watch 监听文件变化
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

// gulp.task('default', ['server:start', 'watch'], function() {
//     gulp.watch('./server.js', ['server:restart']);
// });
//
gulp.task('default', ['nodemon', 'watch']);
