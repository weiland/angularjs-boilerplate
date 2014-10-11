var del = require('del');

module.exports = function (cb) {
  del([
    'dist/**',
    '!dist/.gitkeep'
  ], cb);
};
