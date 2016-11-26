var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

/*
 * @name 获取一个对象的原型类型
 *
 * @params {Anything} object 任何类型的数据
 *
 * @return {String} 对象的原型类型
 */
var getProtoType = function (object) {
  _newArrowCheck(this, _this);

  return Object.prototype.toString.call(object).toLowerCase().slice(8, -1);
}.bind(this);

/*
 * @name 判断一个对象是否为undefined
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isUndefined = function (value) {
  _newArrowCheck(this, _this);

  return value === undefined;
}.bind(this);

/*
 * @name 判断一个对象是否为null
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isNull = function (value) {
  _newArrowCheck(this, _this);

  return value === null;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为数字
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isNumber = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'number';
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为字符串
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isString = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'string';
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为布尔值
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isBoolean = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'boolean';
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为函数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isFunction = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'function';
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为数组
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isArray = function (value) {
  _newArrowCheck(this, _this);

  return getProtoType(value) === 'array';
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为类对象，包括原生对象/构造实例/数组
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isObjectLike = function (value) {
  _newArrowCheck(this, _this);

  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为对象，包括原生对象和构造实例
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isObject = function (value) {
  _newArrowCheck(this, _this);

  return isObjectLike(value) && !isArray(value);
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为对象，包括原生对象
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isPlainObject = function (value) {
  _newArrowCheck(this, _this);

  return isObject(value) && value.constructor === Object;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为正则表达式
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isRegExp = function (value) {
  _newArrowCheck(this, _this);

  return isObjectLike(value) && value.constructor === RegExp;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为日期
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isDate = function (value) {
  _newArrowCheck(this, _this);

  return isObjectLike(value) && value.constructor === Date;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是一个有穷数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
Number.isFinite = Number.isFinite || function (value) {
  _newArrowCheck(this, _this);

  return isNumber(value) && isFinite(value);
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为正数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isPositive = function (value) {
  _newArrowCheck(this, _this);

  return Number.isFinite(value) && value > 0;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为负数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isNegative = function (value) {
  _newArrowCheck(this, _this);

  return Number.isFinite(value) && value < 0;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为整数，包括正整数和负整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isInteger = Number.isInteger || function (value) {
  _newArrowCheck(this, _this);

  return Number.isFinite(value) && Math.floor(value) === value;
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为正整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isPosiInteger = function (value) {
  _newArrowCheck(this, _this);

  return isInteger(value) && isPositive(value);
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为负整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isNegaInteger = function (value) {
  _newArrowCheck(this, _this);

  return isInteger(value) && isNegative(value);
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为浮点数，包括正浮点数和负浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isFloat = function (value) {
  _newArrowCheck(this, _this);

  return Number.isFinite(value) && !isInteger(value);
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为正浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isPosiFloat = function (value) {
  _newArrowCheck(this, _this);

  return isFloat(value) && isPositive(value);
}.bind(this);

/*
 * @name 判断一个对象的数据类型是否为负浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
var isNegaFloat = function (value) {
  _newArrowCheck(this, _this);

  return isFloat(value) && isNegative(value);
}.bind(this);

/*
 * @name 对一个对象/字符串/正整数进行遍历
 *
 * @params {Array, Object, String, Number} target 可进行遍历的对象或个数
 * @params {Function} target 遍历回调
 */
var forEach = function (target, callbcak) {
  _newArrowCheck(this, _this);

  if (!isObjectLike(target) && !isString(target) && !isPosiInteger(target)) throw new TypeError('target must be a Object/Array/String or Positive integer');

  if (isObject(target)) {
    for (var key in target) {
      callbcak(target[key], key, target);
    };
  } else if (isPosiInteger(target)) {
    for (var i = 0; i < target; i++) {
      callbcak(i, target);
    };
  } else if (target.length) {
    for (var _i = 0, len = target.length; _i < len; _i++) {
      callbcak(target[_i], _i, target);
    };
  };
}.bind(this);

/**
 * @name 一个值在一个数组或字符串中的索引
 *
 * @params {Array, String} target 检测的对象
 * @params {Anything} value 任意值
 *
 * @return {Number} 如果存在则返回一个索引，否则则返回-1
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
var indexOf = function (target, value) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  _newArrowCheck(this, _this);

  if (!isArray(target) && !isString(target)) throw new TypeError('target must be a Array or String');

  if (isString(target)) return target.indexOf(value, fromIndex);

  try {
    return target.indexOf(value);
  } catch (error) {
    var index = -1;

    for (var i = fromIndex, len = target.length; i < len; i++) {
      if (target[i] === value) return i;
    };

    return index;
  }
}.bind(this);

/**
 * @name 判断一个对象中是否包含某个值
 *
 * @params {String/Array/Object} target 检测的对象
 * @params {Anythin} value 任意值
 * @params {Number} position [0] 开始查找的位置
 *
 * @return {Boolean} 真或假
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 */
var includes = function (target, value) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  _newArrowCheck(this, _this);

  if (!isArray(target) && !isString(target) && !isObject(target)) throw new TypeError('target must b a Object/Array or String');
  if (position !== 0 && !isPosiInteger(position)) throw new TypeError('position must b a Positive integer');

  if (isArray(target) || isString(target)) {
    try {
      return target.includes(value);
    } catch (error) {
      return indexOf(target, value, position) > -1;
    }
  } else if (isObject(target)) {
    var _ret = function () {
      var result = false;

      forEach(target, function (item) {
        _newArrowCheck(this, _this);

        if (item === value) result === true;
      }.bind(_this));

      return {
        v: result
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  };
}.bind(this);

/**
 * @name 把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象
 *
 * @params {Object} target 目标对象
 * @params {Object} sources 任意多个源对象
 *
 * @return {Object} 目标对象
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
var assign = function (target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  _newArrowCheck(this, _this);

  if (!isObject(target)) throw new TypeError('target must be a Object');

  try {
    return Object.assign.apply(Object, [target].concat(sources));
  } catch (error) {
    for (var _iterator = sources, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i2 >= _iterator.length) break;
        _ref = _iterator[_i2++];
      } else {
        _i2 = _iterator.next();
        if (_i2.done) break;
        _ref = _i2.value;
      }

      var source = _ref;

      if (isObject(source)) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          };
        };
      };
    };

    return target;
  }
}.bind(this);

/**
 * @name 删除一个字符串两端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @params {String} string 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var trimRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
var trim = function (string) {
  _newArrowCheck(this, _this);

  if (!isString(string)) throw new TypeError('string must b a String');

  try {
    return string.trim();
  } catch (error) {
    return string.replace(trimRegex, '');
  }
}.bind(this);

/**
 * @name 删除一个字符串左端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @params {String} string 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var trimLeftRegex = /^[\s\uFEFF\xA0]+/;
var trimLeft = function (string) {
  _newArrowCheck(this, _this);

  if (!isString(string)) throw new TypeError('string must b a String');

  try {
    return string.trimLeft();
  } catch (error) {
    return string.replace(trimLeftRegex, '');
  }
}.bind(this);

/**
 * @name 删除一个字符串右端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @params {String} string 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var trimRightRegex = /[\s\uFEFF\xA0]+$/;
var trimRight = function (string) {
  _newArrowCheck(this, _this);

  if (!isString(string)) throw new TypeError('string must b a String');

  try {
    return string.trimRight();
  } catch (error) {
    return string.replace(trimRightRegex, '');
  }
}.bind(this);

/**
 * @name 使用占位字符在一个字符串前面不断直译直到达到一个固定长度
 *
 * @params {String} string 操作的字符串
 * @params {Number} length 目录长度
 * @params {String} string[' '] 占位字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var padStart = function (string, length) {
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  _newArrowCheck(this, _this);

  if (!isString(string)) throw new TypeError('string must b a String');
  if (!isPosiInteger(length)) throw new TypeError('string must b a Positive integer');
  if (!isString(chars)) throw new TypeError('chars must b a String');

  try {
    return string.padStart(length, chars);
  } catch (error) {
    while (string.length < length) {
      string = chars + string;
    };

    return string.slice(0, length);
  }
}.bind(this);

/**
 * @name 使用占位字符在一个字符串后面不断直译直到达到一个固定长度
 *
 * @params {String} string 操作的字符串
 * @params {Number} length [0] 目录长度
 * @params {String} string[' '] 占位字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var padEnd = function (string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  _newArrowCheck(this, _this);

  if (!isString(string)) throw new TypeError('string must b a String');
  if (!isPosiInteger(length)) throw new TypeError('string must b a Positive integer');
  if (!isString(chars)) throw new TypeError('chars must b a String');

  try {
    return string.padEnd(length, chars);
  } catch (error) {
    while (string.length < length) {
      string += chars;
    };

    return string.slice(0, length);
  }
}.bind(this);

/**
 * @name 使用分隔符对字符串进行分割
 *
 * @params {String} source 操作的字符串
 * @params {String, Number} rule [4] 如果为整数，则按此长度分割，如果为字符串，则将字符串中的';'作为做分隔占位符
 * @params {String} separator[' '] 分隔字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var separate = function (source) {
  var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  _newArrowCheck(this, _this);

  if (!isString(source)) throw new TypeError('source must b a String');
  if (!isString(rule) && !isPosiInteger(rule)) throw new TypeError('rule must b a String or Positive integer');
  if (!isString(separator)) throw new TypeError('separator must b a String or space');

  var result = '';

  if (isPosiInteger(rule)) {
    for (var i = 0, len = source.length; i < len; i++) {
      if (i > 0 && i % rule === 0) result += separator;

      result += source[i];

      if (i + 1 === len) break;
    };
  } else {
    for (var _i3 = 0, count = 0, _len2 = source.length; _i3 < _len2; _i3++) {
      if (rule[_i3 + count] === ';') {
        count++;
        result += separator;
      };

      result += source[_i3];

      if (result.length === rule.length) return result;
    };
  };

  return result;
}.bind(this);

/**
 * @name 清空一个数组
 *
 * @params {Array} target 操作的数组
 *
 * @return {Array} 清空后的数组
 */
var empty = function (target) {
  _newArrowCheck(this, _this);

  if (!isArray(target)) throw new TypeError('target must be a Array');

  return target.splice(0, target.length);
}.bind(this);

/**
 * @name 将其它数组的值拉入第一个数组
 *
 * @params {Array} target 操作的数组
 * @params {Array} sources 一个或多个数组
 *
 * @return {Array} 被拉入数据的target数组
 */
var append = function (target) {
  for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key2 = 1; _key2 < _len3; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  _newArrowCheck(this, _this);

  if (!isArray(target)) throw new TypeError('target must be a Array');

  for (var _iterator2 = sources, _isArray2 = Array.isArray(_iterator2), _i4 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i4 >= _iterator2.length) break;
      _ref2 = _iterator2[_i4++];
    } else {
      _i4 = _iterator2.next();
      if (_i4.done) break;
      _ref2 = _i4.value;
    }

    var source = _ref2;

    if (!isArray(source)) throw new TypeError('source must be a Array');

    forEach(source, function (item) {
      _newArrowCheck(this, _this);

      target.push(item);
    }.bind(this));
  };

  return target;
}.bind(this);

/**
 * @name 将其它数组的值替换第一个数组的值
 *
 * @params {Array} target 操作的数组
 * @params {Array} sources 一个或多个数组
 *
 * @return {Array} 被替换掉数据的target数组
 */
var replace = function (target) {
  for (var _len4 = arguments.length, sources = Array(_len4 > 1 ? _len4 - 1 : 0), _key3 = 1; _key3 < _len4; _key3++) {
    sources[_key3 - 1] = arguments[_key3];
  }

  _newArrowCheck(this, _this);

  return append.apply(undefined, [empty(target)].concat(sources));
}.bind(this);

/*
 * @name 得到当前时间戳
 *
 * @return 当前时间戳
 */
var now = function () {
  _newArrowCheck(this, _this);

  return new Date().getTime();
}.bind(this);

/*
 * 得到一个随机数
 *
 * @return 随机数
 */
var random = function () {
  _newArrowCheck(this, _this);

  return Math.round(now() * Math.random());
}.bind(this);

/*
 * @name 得到一个随机字符戳
 *
 * @params {Number} length [8] 返回的字符串长度
 *
 * @return {String} 随机字符戳
 */
var stampArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomStamp = function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  _newArrowCheck(this, _this);

  var maxIndex = stampArr.length;
  var stamp = '';

  for (var i = 0; i < length; i++) {
    stamp += stampArr[Math.floor(Math.random() * maxIndex)];
  };

  return stamp;
}.bind(this);

var _ = { isUndefined: isUndefined, isNull: isNull, isNumber: isNumber, isString: isString, isBoolean: isBoolean, isFunction: isFunction, isRegExp: isRegExp, isDate: isDate, isArray: isArray, isObjectLike: isObjectLike, isObject: isObject, isPlainObject: isPlainObject, isPositive: isPositive, isNegative: isNegative, isInteger: isInteger, isPosiInteger: isPosiInteger, isNegaInteger: isNegaInteger, isFloat: isFloat, isPosiFloat: isPosiFloat, isNegaFloat: isNegaFloat, forEach: forEach, indexOf: indexOf, includes: includes, assign: assign, trim: trim, trimLeft: trimLeft, trimRight: trimRight, padStart: padStart, padEnd: padEnd, separate: separate, empty: empty, append: append, replace: replace, now: now, random: random, randomStamp: randomStamp };

export { _, isUndefined, isNull, isNumber, isString, isBoolean, isFunction, isRegExp, isDate, isArray, isObjectLike, isObject, isPlainObject, isPositive, isNegative, isInteger, isPosiInteger, isNegaInteger, isFloat, isPosiFloat, isNegaFloat, forEach, indexOf, includes, assign, trim, trimLeft, trimRight, padStart, padEnd, separate, empty, append, replace, now, random, randomStamp };
export default _;