
module.exports = function(obj, cb) {
  var result = '';

  var listTree = function(obj, indentation, start) {
    var indent = (indentation || (indentation = '')) + (start ? start : ''),
      length = getLength(obj),
      len = length;

    var outputTree = function(pre, val, key, flag) {
      if (!!cb && cb.constructor == Function) {
        var str = cb(val, key);
        if (str !== undefined && str.constructor == String) {
          result += pre + str + '\n';
          return;
        }
      }
      if (flag) {
        result += pre + key + '\n';
      } else {
        result += pre + key + ' : ' + val + '\n';
      }
    };

    for (var key in obj) {
      var item = obj[key];
      var flag = (item.constructor == Object || item.constructor == Array);
      var middle = getMiddle(len--, flag);

      if (flag) {
        outputTree(indent + middle, item, key, flag);
        var str = '│ ';
        if (length == 1 || len === 0) {
          str = '  ';
        }
        listTree(item, indent, str);
      } else {
        outputTree(indent + middle, item, key, flag);
      }
    }
  };

  listTree(obj);
  return result;
};

var getLength = function(obj) {
  if (obj.constructor == Array) {
    return obj.length;
  }
  var len = 0;
  for (var key in obj) {
    len++;
  }
  return len;
};

var getMiddle = function(count, flag) {
  var str = '─ ';
  if (flag) {
    str = '┬ ';
  }
  if (count == 1) {
    return '└─' + str;
  } else {
    return '├─' + str;
  }
};
