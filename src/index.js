/*
 * @name 获取一个对象的原型类型
 *
 * @params {Anything} object 任何类型的数据
 *
 * @return {String} 对象的原型类型
 */
const getProtoType = (object) => Object.prototype.toString.call(object).toLowerCase().slice(8, -1);

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
 * @name 判断一个对象的数据类型是否为数字
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNumber = (value) => typeof value === 'number';

/*
 * @name 判断一个对象的数据类型是否为字符串
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isString = (value) => typeof value === 'string';

/*
 * @name 判断一个对象的数据类型是否为布尔值
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isBoolean = (value) => typeof value === 'boolean';

/*
 * @name 判断一个对象的数据类型是否为函数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isFunction = (value) => typeof value === 'function';

/*
 * @name 判断一个对象的数据类型是否为数组
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isArray = (value) => getProtoType(value) === 'array';

/*
 * @name 判断一个对象的数据类型是否为类对象，包括原生对象/构造实例/数组
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isObjectLike = (value) => typeof value === 'object' && value !== null;

/*
 * @name 判断一个对象的数据类型是否为对象，包括原生对象和构造实例
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isObject = (value) => isObjectLike(value) && !isArray(value);

/*
 * @name 判断一个对象的数据类型是否为对象，包括原生对象
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPlainObject = (value) => isObject(value) && value.constructor === Object;

/*
 * @name 判断一个对象的数据类型是否为正则表达式
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isRegExp = (value) => isObjectLike(value) && value.constructor === RegExp;

/*
 * @name 判断一个对象的数据类型是否为日期
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isDate = (value) => isObjectLike(value) && value.constructor === Date;

/*
 * @name 判断一个对象的数据类型是一个有穷数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
Number.isFinite = Number.isFinite || ((value) => isNumber(value) && isFinite(value));

/*
 * @name 判断一个对象的数据类型是否为正数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPositive = (value) => Number.isFinite(value) && value > 0;

/*
 * @name 判断一个对象的数据类型是否为负数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNegative = (value) => Number.isFinite(value) && value < 0;

/*
 * @name 判断一个对象的数据类型是否为整数，包括正整数和负整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isInteger = Number.isInteger || ((value) => Number.isFinite(value) && Math.floor(value) === value);

/*
 * @name 判断一个对象的数据类型是否为正整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPosiInteger = (value) => isInteger(value) && isPositive(value);

/*
 * @name 判断一个对象的数据类型是否为负整数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNegaInteger = (value) => isInteger(value) && isNegative(value);

/*
 * @name 判断一个对象的数据类型是否为浮点数，包括正浮点数和负浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isFloat = (value) => Number.isFinite(value) && !isInteger(value);

/*
 * @name 判断一个对象的数据类型是否为正浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isPosiFloat = (value) => isFloat(value) && isPositive(value);

/*
 * @name 判断一个对象的数据类型是否为负浮点数
 *
 * @params {Anything} value 任何类型的数据
 *
 * @return {Boolean} 真或假
 */
const isNegaFloat = (value) => isFloat(value) && isNegative(value);

/*
 * @name 对一个对象/字符串/正整数进行遍历
 *
 * @params {Array, Object, String, Number} target 可进行遍历的对象或个数
 * @params {Function} target 遍历回调
 */
const forEach = (target, callbcak) => {
  if (!isObjectLike(target) && !isString(target) && !isPosiInteger(target)) throw new TypeError('target must be a Object/Array/String or Positive integer');

  if (isObject(target)) {
    for (let key in target) {
      callbcak(target[key], key, target);
    };
  } else if (isPosiInteger(target)) {
    for (let i = 0; i < target; i++) {
      callbcak(i, target);
    };
  } else if (target.length) {
    for (let i = 0, len = target.length; i < len; i++) {
      callbcak(target[i], i, target);
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
  if (!isArray(target) && !isString(target)) throw new TypeError('target must be a Array or String');

  if (isString(target)) return target.indexOf(value, fromIndex);

  try {
    return target.indexOf(value);
  } catch (error) {
    const index = -1;

    for (let i = fromIndex, len = target.length; i < len; i++) {
      if (target[i] === value) return i;
    };

    return index;
  }
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

  if (isArray(target) || isString(target)) {
    try {
      return target.includes(value);
    } catch (error) {
      return indexOf(target, value, position) > -1;
    }
  } else if (isObject(target)) {
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

  try {
    return Object.assign(target, ...sources);
  } catch (error) {
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

  try {
    return string.trim();
  } catch (error) {
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

  try {
    return string.trimLeft();
  } catch (error) {
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

  try {
    return string.trimRight();
  } catch (error) {
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

  try {
    return string.padStart(length, chars);
  } catch (error) {
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

  try {
    return string.padEnd(length, chars);
  } catch (error) {
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

      if (i + 1 > length - 1) break;
    };
  } else {
    for (let i = 0, count = 0, len = source.length; i < len; i++) {
      if (rule[i + count] === ';') {
        count++;
        result += separator;
      };

      result += source[i];
    };
  };

  return result;
};

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
const stampArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const randomStamp = (length = 8) => {
  const maxIndex = stampArr.length;
  let stamp = '';

  for (let i = 0; i < length; i++) {
    stamp += stampArr[Math.floor(Math.random() * maxIndex)];
  };

  return stamp;
};

const _ = {isUndefined, isNull, isNumber, isString, isBoolean, isFunction, isRegExp, isDate, isArray, isObjectLike, isObject, isPlainObject, isPositive, isNegative, isInteger, isPosiInteger, isNegaInteger, isFloat, isPosiFloat, isNegaFloat, forEach, indexOf, includes, assign, trim, trimLeft, trimRight, padStart, padEnd, separate, now, random, randomStamp};

export {_, isUndefined, isNull, isNumber, isString, isBoolean, isFunction, isRegExp, isDate, isArray, isObjectLike, isObject, isPlainObject, isPositive, isNegative, isInteger, isPosiInteger, isNegaInteger, isFloat, isPosiFloat, isNegaFloat, forEach, indexOf, includes, assign, trim, trimLeft, trimRight, padStart, padEnd, separate, now, random, randomStamp};
export default _;
