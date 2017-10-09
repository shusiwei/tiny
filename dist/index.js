var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 最大安全数值
var MAX_SAFE_INTEGER = 9007199254740991;

// 最大数
var MAX_INTEGER = 1.79E+308;

// 最小数
var MIN_INTEGER = 5e-324;

/**
 * @name 获取一个对象的原型类型
 *
 * @param {Anything} object 任何类型的数据
 *
 * @return {String} 对象的原型类型
 */
var prototype = function prototype(object) {
  return Object.prototype.toString.call(object).toLowerCase().slice(8, -1);
};

/**
 * @name 判断一个对象是否为某个类型
 *
 * @param {Anything} value 任何类型的数据
 * @param {String} type 类型名称
 *
 * @return {Boolean} 真或假
 */
export var isTypeOf = function isTypeOf(object, type) {
  return prototype(object) === type;
};

/**
 * @name 判断一个对象是否为undefined
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isUndefined = function isUndefined(value) {
  return value === undefined;
};

/**
 * @name 判断一个对象是否为null
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isNull = function isNull(value) {
  return value === null;
};

/**
 * @name 判断一个对象的数据类型是否为布尔值
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

/**
 * @name 判断一个对象的数据类型是否为数字
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isNumber = function isNumber(value) {
  return typeof value === 'number';
};

/**
 * @name 判断一个数值是一个有穷数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isFiniteNumber = function isFiniteNumber(value) {
  return Number.isFinite ? Number.isFinite(value) : isNumber(value) && isFinite(value);
};

/**
 * @name 判断一个数值是否为整数，包括正整数和负整数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isInteger = function isInteger(value) {
  return Number.isInteger ? Number.isInteger(value) : isFiniteNumber(value) && Math.floor(value) === value;
};

/**
 * @name 判断一个数值是否为安全整数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isSafeInteger = function isSafeInteger(value) {
  return Number.isSafeInteger ? Number.isSafeInteger(value) : isInteger(value) && Math.abs(value) <= MAX_SAFE_INTEGER;
};

/**
 * @name 判断一个数值是否为正数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isPositive = function isPositive(value) {
  return isFiniteNumber(value) && value > 0;
};

/**
 * @name 判断一个数值是否为负数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isNegative = function isNegative(value) {
  return isFiniteNumber(value) && value < 0;
};

/**
 * @name 判断一个数值是否为正整数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isPosiInteger = function isPosiInteger(value) {
  return isInteger(value) && isPositive(value);
};

/**
 * @name 判断一个数值是否为负整数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isNegaInteger = function isNegaInteger(value) {
  return isInteger(value) && isNegative(value);
};

/**
 * @name 判断一个数值是否为浮点数，包括正浮点数和负浮点数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isFloat = function isFloat(value) {
  return isFiniteNumber(value) && !isInteger(value);
};

/**
 * @name 判断一个数值是否为正浮点数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isPosiFloat = function isPosiFloat(value) {
  return isFloat(value) && isPositive(value);
};

/**
 * @name 判断一个数值是否为负浮点数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isNegaFloat = function isNegaFloat(value) {
  return isFloat(value) && isNegative(value);
};

/**
 * @name 判断一个值是否为一个长度值
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isLength = function isLength(value) {
  return isSafeInteger(value) && value > -1;
};

/**
 * @name 判断一个对象的数据类型是否为字符串
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isString = function isString(value) {
  return typeof value === 'string';
};

/**
 * @name 判断一个对象的数据类型是否为函数
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

/**
 * @name 判断一个对象的数据类型是否为类对象，包括原生对象/构造实例/数组
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isObjectLike = function isObjectLike(value) {
  return !isNull(value) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

/**
 * @name 判断一个对象的数据类型是否为对象，包括原生对象和构造实例
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isObject = function isObject(value) {
  return isObjectLike(value) || isFunction(value);
};

/**
 * @name 判断一个对象的数据类型是否为对象，包括原生对象
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isPlainObject = function isPlainObject(value) {
  return isObjectLike(value) && value.constructor === Object;
};

/**
 * @name 判断一个对象的数据类型是否为数组
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isArray = function isArray(value) {
  return isTypeOf(value, 'array');
};

/**
 * @name 判断一个对象的数据类型是否为类数组对象，包括Array/String/NodeList/Arguments等
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isArrayLike = function isArrayLike(value) {
  return !isNull(value) && !isFunction(value) && isLength(value.length);
};

/**
 * @name 判断一个对象的数据类型是否为正则表达式
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isRegExp = function isRegExp(value) {
  return isTypeOf(value, 'regexp');
};

/**
 * @name 判断一个对象的数据类型是否为日期
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isDate = function isDate(value) {
  return isTypeOf(value, 'date');
};

/**
 * @name 判断一个对象的数据类型是否为Error类型
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isError = function isError(value) {
  return isTypeOf(value, 'error');
};

/**
 * @name 判断一个对象的数据类型是否为Arguments
 *
 * @param {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
export var isArguments = function isArguments(value) {
  return isTypeOf(value, 'arguments');
};

/**
 * @name 对一个对象/字符串/正整数进行遍历
 *
 * @param {ArrayLike, ObjectLike} target 可进行遍历的对象或个数
 * @param {Function} target 遍历回调
 */
export var forEach = function forEach(target, callbcak) {
  if (!isArrayLike(target) && !isObjectLike(target)) throw new TypeError('forEach: target must be a ArrayLike or ObjectLike');

  if (isArrayLike(target)) {
    for (var i = 0, len = target.length; i < len; i++) {
      callbcak(target[i], i, target);
    };
  } else if (isObjectLike(target)) {
    for (var key in target) {
      callbcak(target[key], key, target);
    };
  };
};

/**
 * @name 对一个对象/字符串/正整数进行遍历并返回
 *
 * @param {ArrayLike, ObjectLike} target 可进行遍历的对象或个数
 * @param {Function} target 遍历回调
 *
 * @return {Array} 重新组合的数组
 */
export var map = function map(target, callbcak) {
  var result = [];

  forEach(target, function (item, index, target) {
    result.push(callbcak(item, index, target));
  });

  return result;
};

/**
 * @name 一个值在一个数组或字符串中的索引
 *
 * @param {ArrayLike} target 检测的对象
 * @param {Anything} value 任意值
 *
 * @return {Number} 如果存在则返回一个索引，否则则返回-1
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
export var indexOf = function indexOf(target, value) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!isArrayLike(target)) throw new TypeError('indexOf: target must be a ArrayLike');

  if (isString(target)) return target.indexOf(value, fromIndex);
  if (isArray(target) && isFunction(Array.prototype.indexOf)) return target.indexOf(value, fromIndex);

  var index = -1;

  for (var i = fromIndex, len = target.length; i < len; i++) {
    if (target[i] === value) return i;
  };

  return index;
};

/**
 * @name 判断一个对象中是否包含某个值
 *
 * @param {String/Array/Object} target 检测的对象
 * @param {Anythin} value 任意值
 * @param {Number} position [0] 开始查找的位置
 *
 * @return {Boolean} 真或假
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 */
export var includes = function includes(target, value) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!isArrayLike(target) && !isObjectLike(target)) throw new TypeError('includes: target must b a Array/String/ObjectLike');
  if (position !== 0 && !isPosiInteger(position)) throw new TypeError('includes: position must b a Positive integer');

  if (isArray(target)) return isFunction(Array.prototype.includes) ? target.includes(value) : indexOf(target, value, position) > -1;
  if (isString(target)) return isFunction(String.prototype.includes) ? target.includes(value) : indexOf(target, value, position) > -1;

  var result = false;

  forEach(target, function (item) {
    if (item === value) result === true;
  });

  return result;
};

/**
 * @name 把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象
 *
 * @param {ObjectLike} target 目标对象
 * @param {ObjectLike} sources 任意多个源对象
 *
 * @return {Object} 目标对象
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
export var assign = function assign(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!isObjectLike(target)) throw new TypeError('assign: target must be a ObjectLike');

  if (isFunction(Object.assign)) {
    return Object.assign.apply(Object, [target].concat(sources));
  } else {
    for (var _iterator = sources, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var source = _ref;

      if (isObjectLike(source)) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          };
        };
      };
    };

    return target;
  }
};

/**
 * @name 删除一个字符串两端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @param {String} target 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var trimRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
export var trim = function trim(target) {
  if (!isString(target)) throw new TypeError('trim: target must b a String');

  return isFunction(String.prototype.trim) ? target.trim() : target.replace(trimRegex, '');
};

/**
 * @name 删除一个字符串左端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @param {String} target 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var trimLeftRegex = /^[\s\uFEFF\xA0]+/;
export var trimLeft = function trimLeft(target) {
  if (!isString(target)) throw new TypeError('trimLeft: target must b a String');

  return isFunction(String.prototype.trimLeft) ? target.trimLeft() : target.replace(trimLeftRegex, '');
};

/**
 * @name 删除一个字符串右端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @param {String} target 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
var trimRightRegex = /[\s\uFEFF\xA0]+$/;
export var trimRight = function trimRight(target) {
  if (!isString(target)) throw new TypeError('trimRight: target must b a String');

  return isFunction(String.prototype.trimRight) ? target.trimRight() : target.replace(trimRightRegex, '');
};

/**
 * @name 使用占位字符在一个字符串前面不断直译直到达到一个固定长度
 *
 * @param {String} target 操作的字符串
 * @param {Number} length 目录长度
 * @param {String} chars[' '] 占位字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
export var padStart = function padStart(target, length) {
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  if (!isString(target)) throw new TypeError('padStart: target must b a String');
  if (!isPosiInteger(length)) throw new TypeError('padStart: length must b a Positive integer');
  if (!isString(chars)) throw new TypeError('padStart: chars must b a String');

  while (target.length < length) {
    target = chars + target;
  };

  return target.slice(0, length);
};

/**
 * @name 使用占位字符在一个字符串后面不断直译直到达到一个固定长度
 *
 * @param {String} target 操作的字符串
 * @param {Number} length [0] 目录长度
 * @param {String} chars[' '] 占位字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
export var padEnd = function padEnd(target) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  if (!isString(target)) throw new TypeError('padEnd: target must b a String');
  if (!isPosiInteger(length)) throw new TypeError('padEnd: length must b a Positive integer');
  if (!isString(chars)) throw new TypeError('padEnd: chars must b a String');

  if (isFunction(String.prototype.padEnd)) {
    return target.padEnd(length, chars);
  } else {
    while (target.length < length) {
      target += chars;
    };

    return target.slice(0, length);
  }
};

/**
 * @name 判断字符串的起始位置是否匹配其他字符串中的字符
 *
 * @param {String} target 操作的字符串
 * @param {String} value 结尾匹配的字符串
 *
 * @return {Boolean} 真或假
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 */
export var startsWith = function startsWith(target, value) {
  if (!isString(target)) throw new TypeError('startsWith: target must b a String');
  if (!isString(value)) throw new TypeError('startsWith: value must b a String');

  return isFunction(String.prototype.startsWith) ? target.startsWith(value) : target.slice(0, value.length) === value;
};

/**
 * @name 判断一个字符串的结尾是否包含其他字符串中的字符
 *
 * @param {String} target 操作的字符串
 * @param {String} value 结尾匹配的字符串
 *
 * @return {Boolean} 真或假
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 */
export var endsWith = function endsWith(target, value) {
  if (!isString(target)) throw new TypeError('endsWith: target must b a String');
  if (!isString(value)) throw new TypeError('endsWith: value must b a String');

  return isFunction(String.prototype.endsWith) ? target.endsWith(value) : target.slice(target.length - value.length) === value;
};

/**
 * @name 使用分隔符对字符串进行分割
 *
 * @param {String} source 操作的字符串
 * @param {String, Number} rule [4] 如果为整数，则按此长度分割，如果为字符串，则将字符串中的';'作为做分隔占位符
 * @param {String} separator[' '] 分隔字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
export var separate = function separate(source) {
  var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  if (!isString(source)) throw new TypeError('separate: source must b a String');
  if (!isString(rule) && !isPosiInteger(rule)) throw new TypeError('separate: rule must b a String or Positive integer');
  if (!isString(separator)) throw new TypeError('separate: separator must b a String or space');

  var result = '';

  if (isPosiInteger(rule)) {
    for (var i = 0, len = source.length; i < len; i++) {
      if (i > 0 && i % rule === 0) result += separator;

      result += source[i];

      if (i + 1 === len) break;
    };
  } else {
    for (var _i2 = 0, count = 0, _len2 = source.length; _i2 < _len2; _i2++) {
      if (rule[_i2 + count] === ';') {
        count++;
        result += separator;
      };

      result += source[_i2];

      if (result.length === rule.length) return result;
    };
  };

  return result;
};

/**
 * @name 清空一个数组
 *
 * @param {Array} target 操作的数组
 *
 * @return {Array} 清空后的数组
 */
export var empty = function empty(target) {
  if (!isArray(target)) throw new TypeError('empty: target must be a Array');

  // 清空所有的值
  target.splice(0, target.length);

  // 返回空数组
  return target;
};

/**
 * @name 将其它数组的值拉入第一个数组
 *
 * @param {Array} target 操作的数组
 * @param {Array} sources 一个或多个数组
 *
 * @return {Array} 被拉入数据的target数组
 */
export var append = function append(target) {
  for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key2 = 1; _key2 < _len3; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!isArray(target)) throw new TypeError('append: target must be a Array');

  for (var _iterator2 = sources, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i3 >= _iterator2.length) break;
      _ref2 = _iterator2[_i3++];
    } else {
      _i3 = _iterator2.next();
      if (_i3.done) break;
      _ref2 = _i3.value;
    }

    var source = _ref2;

    if (!isArray(source)) throw new TypeError('append: source must be a Array');

    for (var _iterator3 = source, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i4 >= _iterator3.length) break;
        _ref3 = _iterator3[_i4++];
      } else {
        _i4 = _iterator3.next();
        if (_i4.done) break;
        _ref3 = _i4.value;
      }

      var item = _ref3;

      target.push(item);
    };
  };

  return target;
};

/**
 * @name 将其它数组的值替换第一个数组的值
 *
 * @param {Array} target 操作的数组
 * @param {Array} sources 一个或多个数组
 *
 * @return {Array} 被替换掉数据的target数组
 */
export var replace = function replace(target) {
  for (var _len4 = arguments.length, sources = Array(_len4 > 1 ? _len4 - 1 : 0), _key3 = 1; _key3 < _len4; _key3++) {
    sources[_key3 - 1] = arguments[_key3];
  }

  return append.apply(undefined, [empty(target)].concat(sources));
};

/**
 * @name 将一个数组进行分割
 *
 * @param {Array} target 操作的数组
 * @param {Number} size 一个或多个数组
 *
 * @return {Array} 被替换掉数据的target数组
 */
export var chunk = function chunk(target) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!isArray(target)) throw new TypeError('chunk: target must be a Array');
  if (!isPosiInteger(size)) throw new TypeError('chunk: size must be a posiInteger');

  if (target.length === 0) return target;

  var count = Math.ceil(target.length / size);
  var result = [];

  for (var i = 0; i < count; i++) {
    var length = (i + 1) * size;
    var block = [];

    result.push(block);

    for (var j = i * size; j < length; j++) {
      if (j === target.length) return result;
      block.push(target[j]);
    };
  };

  return result;
};

/**
 * @name 得到当前时间戳
 *
 * @return 当前时间戳
 */
export var now = function now() {
  return new Date().getTime();
};

/**
 * @name 得到一个随机数
 *
 * @return 随机数
 */
export var random = function random() {
  return Math.round(now() * Math.random());
};

/**
 * @name 得到一个随机字符戳
 *
 * @param {Number} length [8] 返回的字符串长度
 *
 * @return {String} 随机字符戳
 */
var stampStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export var randomStamp = function randomStamp() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  var maxIndex = stampStr.length;
  var stamp = '';

  for (var i = 0; i < length; i++) {
    stamp += stampStr[Math.floor(Math.random() * maxIndex)];
  };

  return stamp;
};