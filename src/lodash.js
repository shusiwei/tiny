const getProtoType = (object) => Object.prototype.toString.call(object).toLowerCase().slice(8, -1);
const isUndefined = (value) => value === undefined;
const isNull = (value) => value === null;
const isNumber = (value) => typeof value === 'number';
const isString = (value) => typeof value === 'string';
const isBoolean = (value) => typeof value === 'boolean';
const isFunction = (value) => typeof value === 'function';
const isArray = (value) => getProtoType(value) === 'array';
const isObjectLike = (value) => typeof value === 'object' && value !== null;
const isObject = (value) => isObjectLike(value) && !isArray(value);
const isPlainObject = (value) => isObject(value) && value.constructor === Object;
const isRegExp = (value) => isObjectLike(value) && value.constructor === RegExp;
const isDate = (value) => isObjectLike(value) && value.constructor === Date;
const isInteger = (value) => {
  try {
    return Number.isInteger(value);
  } catch (error) {
    isNumber(value) && Math.floor(value) === value;
  };
};

const forEach = (object, callbcak) => {
  if (!isObjectLike(object) && !isString(object)) throw new TypeError('object must be a Object or Array or String');

  if (isObject(object)) {
    for (let key in object) {
      callbcak(object[key], key, object);
    };
  } else if (object.length) {
    for (let i = 0; i < object.length; i++) {
      callbcak(object[i], i, object);
    };
  };
};

const indexOf = (object, value) => {
  let index = -1;

  if (isArray(object) || isString(object)) {
    try {
      return object.indexOf(value);
    } catch (error) {
      for (let i = 0; i < object.length; i++) {
        if (object[i] === value) return i;
      };
    };
  } else {
    forEach(object, (item, key) => {
      if (item === value) index = key;
    });
  };

  return index;
};

const includes = (object, value) => {
  let result = false;

  if (isArray(object) || isString(object)) {
    try {
      return object.includes(value);
    } catch (error) {
      return indexOf(object, value) > -1;
    }
  } else {
    forEach(object, item => {
      if (item === value) result === true;
    });
  };

  return result;
};

/**
 * Object.assign polyfill
 * Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
 *
 * @params {Object} target 目标对象
 * @params {Object} sources 任意多个源对象
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

const now = () => {
  return new Date().getTime();
};

const random = () => {
  return Math.round(now() * Math.random());
};

const stampArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const randomStamp = (length = 16, repeat) => {
  const stampLength = stampArr.length;
  let stamp = '';

  for (let i = 0; i < length; i++) {
    let rnd = stampArr[Math.floor(Math.random() * stampLength)];
    if (!repeat) {
      while (indexOf(stamp, rnd) === -1) stamp += rnd;
    } else {
      stamp += rnd;
    };
  };

  return stamp;
};

const _ = {isUndefined, isNull, isNumber, isString, isBoolean, isFunction, isRegExp, isDate, isArray, isObjectLike, isObject, isPlainObject, isInteger, forEach, indexOf, includes, assign, now, random, randomStamp};

export {_, isUndefined, isNull, isNumber, isString, isBoolean, isFunction, isRegExp, isDate, isArray, isObjectLike, isObject, isPlainObject, isInteger, forEach, indexOf, includes, assign, now, random, randomStamp};
export default _;
