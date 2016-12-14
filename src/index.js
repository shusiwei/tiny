/*
 * @name 获取一个对象的原型类型
 *
 * @params {Anything} object 任何类型的数据
 *
 * @return {String} 对象的原型类型
 */
const getProtoType = (object) => Object.prototype.toString.call(object).toLowerCase().slice(8, -1);

// 最大安全数值
const MAX_SAFE_INTEGER = 9007199254740991;

// 最大数
const MAX_INTEGER = 1.79E+308;

// 最小数
const MIN_INTEGER = 5e-324;

/*
 * @name 判断一个对象是否为undefined
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isUndefined = (value) => value === undefined;

/*
 * @name 判断一个对象是否为null
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNull = (value) => value === null;

/*
 * @name 判断一个对象的数据类型是否为布尔值
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isBoolean = (value) => typeof value === 'boolean';

/*
 * @name 判断一个对象的数据类型是否为数字
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNumber = (value) => typeof value === 'number';

/*
 * @name 判断一个数值是一个有穷数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
Number.isFinite = Number.isFinite || ((value) => isNumber(value) && isFinite(value));

/*
 * @name 判断一个数值是否为整数，包括正整数和负整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isInteger = (value) => {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return Number.isFinite(value) && Math.floor(value) === value;
  }
};

/*
 * @name 判断一个数值是否为安全整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isSafeInteger = (value) => {
  if (Number.isSafeInteger) {
    return Number.isSafeInteger(value);
  } else {
    return isInteger(value) && Math.abs(value) <= MAX_SAFE_INTEGER;
  }
};

/*
 * @name 判断一个数值是否为正数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPositive = (value) => Number.isFinite(value) && value > 0;

/*
 * @name 判断一个数值是否为负数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNegative = (value) => Number.isFinite(value) && value < 0;

/*
 * @name 判断一个数值是否为正整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPosiInteger = (value) => isInteger(value) && isPositive(value);

/*
 * @name 判断一个数值是否为负整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNegaInteger = (value) => isInteger(value) && isNegative(value);

/*
 * @name 判断一个数值是否为浮点数，包括正浮点数和负浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isFloat = (value) => Number.isFinite(value) && !isInteger(value);

/*
 * @name 判断一个数值是否为正浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPosiFloat = (value) => isFloat(value) && isPositive(value);

/*
 * @name 判断一个数值是否为负浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNegaFloat = (value) => isFloat(value) && isNegative(value);

/*
 * @name 判断一个对象的数据类型是否为字符串
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isString = (value) => typeof value === 'string';

/*
 * @name 判断一个对象的数据类型是否为函数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isFunction = (value) => typeof value === 'function';

/*
 * @name 判断一个对象的数据类型是否为对象，包括原生对象和构造实例
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isObject = (value) => getProtoType(value) === 'object';

/*
 * @name 判断一个对象的数据类型是否为对象，包括原生对象
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPlainObject = (value) => isObject(value) && value.constructor === Object;

/*
 * @name 判断一个对象的数据类型是否为数组
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isArray = (value) => getProtoType(value) === 'array';

/*
 * @name 判断一个值是否为一个长度值
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isLength = (value) => isSafeInteger(value) && value > -1;

/*
 * @name 判断一个对象的数据类型是否为类数组，包括Array/String/NodeList/Arguments等
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isArrayLike = (object) => !isUndefined(object) && !isNull(object) && !isObject(object) && !isFunction(object) && isLength(object.length);

/*
 * @name 判断一个对象的数据类型是否为类对象，包括原生对象/构造实例/数组
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isObjectLike = (value) => isObject(value) || isArrayLike(value);

/*
 * @name 判断一个对象的数据类型是否为正则表达式
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isRegExp = (value) => getProtoType(value) === 'regexp';

/*
 * @name 判断一个对象的数据类型是否为日期
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isDate = (value) => getProtoType(value) === 'date';

/*
 * @name 判断一个对象的数据类型是否为Error类型
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isError = (value) => getProtoType(value) === 'error';

/*
 * @name 判断一个对象的数据类型是否为Arguments
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isArguments = (value) => getProtoType(value) === 'arguments';

/*
 * @name 对一个对象/字符串/正整数进行遍历
 *
 * @params {Array, Object, String, Number} target 可进行遍历的对象或个数
 * @params {Function} target 遍历回调
 */
const forEach = (target, callbcak) => {
  if (!isObjectLike(target) && !isString(target) && !isPosiInteger(target)) throw new TypeError('target must be a Object/Array/String or Positive integer');

  if (isArrayLike(target)) {
    for (let i = 0, len = target.length; i < len; i++) {
      callbcak(target[i], i, target);
    };
  } else if (isObject(target)) {
    for (let key in target) {
      callbcak(target[key], key, target);
    };
  } else if (isPosiInteger(target)) {
    for (let i = 0; i < target; i++) {
      callbcak(i, target);
    };
  };
};

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
const indexOf = (target, value, fromIndex = 0) => {
  if (!isArrayLike(target) && !isString(target)) throw new TypeError('target must be a Array or String');

  if (isString(target)) return target.indexOf(value, fromIndex);
  if (isArray(target) && isFunction(Array.prototype.indexOf)) return target.indexOf(value);

  const index = -1;

  for (let i = fromIndex, len = target.length; i < len; i++) {
    if (target[i] === value) return i;
  };

  return index;
};

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
const includes = (target, value, position = 0) => {
  if (!isArray(target) && !isString(target) && !isObject(target)) throw new TypeError('target must b a Object/Array or String');
  if (position !== 0 && !isPosiInteger(position)) throw new TypeError('position must b a Positive integer');

  if (isArray(target)) {
    if (Array.prototype.includes) {
      return target.includes(value);
    } else {
      return indexOf(target, value, position) > -1;
    }
  } else if (isString(target)) {
    if (String.prototype.includes) {
      return target.includes(value);
    } else {
      return indexOf(target, value, position) > -1;
    }
  } else if (isObject(target) || isArrayLike(target)) {
    let result = false;

    forEach(target, item => {
      if (item === value) result === true;
    });

    return result;
  };
};

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
const assign = (target, ...sources) => {
  if (!isObject(target)) throw new TypeError('target must be a Object');

  if (isFunction(Object.assign)) {
    return Object.assign(target, ...sources);
  } else {
    for (let source of sources) {
      if (isObject(source)) {
        for (let key in source) {
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
 * @params {String} string 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
const trimRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
const trim = (string) => {
  if (!isString(string)) throw new TypeError('string must b a String');

  if (isFunction(String.prototype.trim)) {
    return string.trim();
  } else {
    return string.replace(trimRegex, '');
  }
};

/**
 * @name 删除一个字符串左端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @params {String} string 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
const trimLeftRegex = /^[\s\uFEFF\xA0]+/;
const trimLeft = (string) => {
  if (!isString(string)) throw new TypeError('string must b a String');

  if (isFunction(String.prototype.trimLeft)) {
    return string.trimLeft();
  } else {
    return string.replace(trimLeftRegex, '');
  }
};

/**
 * @name 删除一个字符串右端的连续空白字符(space、tab、no-break space、LF、CR等)
 *
 * @params {String} string 操作的字符串
 *
 * @return {String} 删除空白字符后的新字符串
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
const trimRightRegex = /[\s\uFEFF\xA0]+$/;
const trimRight = (string) => {
  if (!isString(string)) throw new TypeError('string must b a String');

  if (isFunction(String.prototype.trimRight)) {
    return string.trimRight();
  } else {
    return string.replace(trimRightRegex, '');
  }
};

/**
 * @name 使用占位字符在一个字符串前面不断直译直到达到一个固定长度
 *
 * @params {String} string 操作的字符串
 * @params {Number} length 目录长度
 * @params {String} string[' '] 占位字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
const padStart = (string, length, chars = ' ') => {
  if (!isString(string)) throw new TypeError('string must b a String');
  if (!isPosiInteger(length)) throw new TypeError('string must b a Positive integer');
  if (!isString(chars)) throw new TypeError('chars must b a String');

  if (isFunction(String.prototype.padStart)) {
    return string.padStart(length, chars);
  } else {
    while (string.length < length) {
      string = chars + string;
    };

    return string.slice(0, length);
  }
};

/**
 * @name 使用占位字符在一个字符串后面不断直译直到达到一个固定长度
 *
 * @params {String} string 操作的字符串
 * @params {Number} length [0] 目录长度
 * @params {String} string[' '] 占位字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
const padEnd = (string, length = 0, chars = ' ') => {
  if (!isString(string)) throw new TypeError('string must b a String');
  if (!isPosiInteger(length)) throw new TypeError('string must b a Positive integer');
  if (!isString(chars)) throw new TypeError('chars must b a String');

  if (isFunction(String.prototype.padEnd)) {
    return string.padEnd(length, chars);
  } else {
    while (string.length < length) {
      string += chars;
    };

    return string.slice(0, length);
  }
};

/**
 * @name 使用分隔符对字符串进行分割
 *
 * @params {String} source 操作的字符串
 * @params {String, Number} rule [4] 如果为整数，则按此长度分割，如果为字符串，则将字符串中的';'作为做分隔占位符
 * @params {String} separator[' '] 分隔字符
 *
 * @url: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 */
const separate = (source, rule = 4, separator = ' ') => {
  if (!isString(source)) throw new TypeError('source must b a String');
  if (!isString(rule) && !isPosiInteger(rule)) throw new TypeError('rule must b a String or Positive integer');
  if (!isString(separator)) throw new TypeError('separator must b a String or space');

  let result = '';

  if (isPosiInteger(rule)) {
    for (let i = 0, len = source.length; i < len; i++) {
      if (i > 0 && i % rule === 0) result += separator;

      result += source[i];

      if (i + 1 === len) break;
    };
  } else {
    for (let i = 0, count = 0, len = source.length; i < len; i++) {
      if (rule[i + count] === ';') {
        count++;
        result += separator;
      };

      result += source[i];

      if (result.length === rule.length) return result;
    };
  };

  return result;
};

/**
 * @name 清空一个数组
 *
 * @params {Array} target 操作的数组
 *
 * @return {Array} 清空后的数组
 */
const empty = (target) => {
  if (!isArray(target)) throw new TypeError('target must be a Array');

  // 清空所有的值
  target.splice(0, target.length);

  // 返回空数组
  return target;
};

/**
 * @name 将其它数组的值拉入第一个数组
 *
 * @params {Array} target 操作的数组
 * @params {Array} sources 一个或多个数组
 *
 * @return {Array} 被拉入数据的target数组
 */
const append = (target, ...sources) => {
  if (!isArray(target)) throw new TypeError('target must be a Array');

  for (let source of sources) {
    if (!isArray(source)) throw new TypeError('source must be a Array');

    forEach(source, item => {
      target.push(item);
    });
  };

  return target;
};

/**
 * @name 将其它数组的值替换第一个数组的值
 *
 * @params {Array} target 操作的数组
 * @params {Array} sources 一个或多个数组
 *
 * @return {Array} 被替换掉数据的target数组
 */
const replace = (target, ...sources) => append(empty(target), ...sources);

/*
 * @name 得到当前时间戳
 *
 * @return 当前时间戳
 */
const now = () => new Date().getTime();

/*
 * 得到一个随机数
 *
 * @return 随机数
 */
const random = () => Math.round(now() * Math.random());

/*
 * @name 得到一个随机字符戳
 *
 * @params {Number} length [8] 返回的字符串长度
 *
 * @return {String} 随机字符戳
 */
const stampStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomStamp = (length = 8) => {
  const maxIndex = stampStr.length;
  let stamp = '';

  for (let i = 0; i < length; i++) {
    stamp += stampStr[Math.floor(Math.random() * maxIndex)];
  };

  return stamp;
};

export {isUndefined, isNull, isBoolean, isNumber, isSafeInteger, isPositive, isNegative, isPosiInteger, isNegaInteger, isFloat, isPosiFloat, isNegaFloat, isString, isFunction, isObject, isPlainObject, isArray, isLength, isArrayLike, isObjectLike, isRegExp, isDate, isError, isArguments, forEach, indexOf, includes, assign, trim, trimLeft, trimRight, padStart, padEnd, separate, empty, append, replace, now, random, randomStamp};
