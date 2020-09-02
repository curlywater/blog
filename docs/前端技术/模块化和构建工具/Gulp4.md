---
title: 自动化构建工具 —— Gulp4
permalink: /f2e/modules/gulp4
---
# Gulp4

## node版本依赖的可能问题

### babel语法不支持
> Most new versions of node support most features that TypeScript or Babel provide, except the import/export syntax. When only that syntax is desired, rename to gulpfile.esm.js and install the esm module.

## tasks组合
``` js
if (process.env.NODE_ENV === 'production') {
  exports.build = series(transpile, minify);
} else {
  exports.build = series(transpile, livereload);
}
```

## Node异步方式支持

### error-first callbacks
错误信息作为第一个参数的回调函数
``` javascript
function errorFirstCallback(err, data) {
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log(data);
}

fs.readFile('/some/file/that/does-not-exist', errorFirstCallback);
```
``` js
function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb();
}

exports.default = callbackTask;
```
```js
// 把callback传递给另一个API
const fs = require('fs');

function passingCallback(cb) {
  fs.access('gulpfile.js', cb);
}

exports.default = passingCallback;
```

### streams
The stream produced by src() should be returned from a task to signal async completion
``` js
const { src, dest } = require('gulp');

function streamTask() {
  return src('*.js')
    .pipe(dest('output'));
}

exports.default = streamTask;
```

### eventEmitter
``` js
const { EventEmitter } = require('events');

function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 250);
  return emitter;
}

exports.default = eventEmitterTask;
```

### childprocess
``` js
const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

exports.default = childProcessTask;
```

### observable
``` js
const { Observable } = require('rxjs');

function observableTask() {
  return Observable.of(1, 2, 3);
}

exports.default = observableTask;
```

## 文件流
``` js
const compileJS = function () {
	return src("src/*.js").pipe(babel()).pipe(dest("output"));
}
```
- ```src```读入文件，允许传入glob字符串或者glob数组，returns a stream that produces Vinyl objects.
- ```pipe```传输stream
- ```dest```写入文件，returns a stream that consumes Vinyl objects.

### src可在中途调用
适用于在一个pipeline在对不同的文件操作
``` js
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(uglify())
    .pipe(dest('output/'));
}
```

### dest可在中途调用
适用于在一个pipeline中生成不同的文件
``` js
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(dest('output/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}
```

## Glob
> Avoid using Node's path methods, like path.join, to create globs. On Windows, it produces an invalid glob because Node uses \\ as the separator. Also avoid the __dirname global, __filename global, or process.cwd() for the same reasons.

1. glob中的分隔符永远是'/'，无论什么系统
2. 传入glob数组，会从左到右匹配。可以做非匹配，非匹配前必须跟一个全匹配，非匹配的作用是从全匹配结果中筛除掉一些文件```['scripts/**/*.js','!scripts/vendor/**']```
3. `*`代表一层级
4. `**`代表跨层级
5. 在src中使用时
    1. 指定base，统一的路径前缀
    2. 指定cwd，和相对路径组合生成绝对路径，替代path.join
    3. 指定cwdbase，base和cwd必须对齐
    4. 指定root
    5. 指定allowEmpty，允许无匹配，默认设置为false，匹配不到文件时将会报错

## Plugins
gulp插件可以使用node模块替代
``` js
const del = require('delete');

exports.default = function(cb) {
  // Use the `delete` module directly, instead of using gulp-rimraf
  del(['output/*.js'], cb);
}
```
使用gulp-if条件使用plugins
``` js
function isJavaScript(file) {
  // Check if file extension is '.js'
  return file.extname === '.js';
}

exports.default = function() {
  // Include JavaScript and CSS files in a single pipeline
  return src(['src/*.js', 'src/*.css'])
    // Only apply gulp-uglify plugin to JavaScript files
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(dest('output/'));
}
```
使用inline plugin在已有plugin上扩展
``` js
exports.default = function() {
  return src('src/*.js')
    // Instead of using gulp-uglify, you can create an inline plugin
    .pipe(through2.obj(function(file, _, cb) {
      if (file.isBuffer()) {
        const code = uglify.minify(file.contents.toString())
        file.contents = Buffer.from(code)
      }
      cb(null, file);
    }))
    .pipe(dest('output/'));
}
```

## watch
设置ignoreInitial在启动watch是就执行编译
``` js
const { watch } = require('gulp');

exports.default = function() {
  // The task will be executed upon startup
  watch('src/*.js', { ignoreInitial: false }, function(cb) {
    // body omitted
    cb();
  });
};
```