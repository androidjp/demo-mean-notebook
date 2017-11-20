var path = require('path');

const _root = path.resolve(__dirname , '../..');

/// 用于规定统一的获取系统绝对路径
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
  }
  
  
  module.exports.root = root;