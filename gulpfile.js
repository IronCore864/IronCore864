const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');

function buildTask(cb) {
  src('src/less/*.less').pipe(less()).pipe(dest('css'));
  cb();
}

function watchTask(cb) {
    watch('src/less/*.less', series([buildTask]))
    cb();
}

exports.watch = watchTask;
exports.default = buildTask;
