var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var getProtoType = function (object) {
  _newArrowCheck(this, _this);

  return Object.prototype.toString.call(object).toLowerCase().slice(8, -1);
}.bind(this);
var isUndefined = function (value) {
  _newArrowCheck(this, _this);

  return value === undefined;
}.bind(this);
var isNull = function (value) {
  _newArrowCheck(this, _this);

  return value === null;
}.bind(this);
var isNumber = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'number';
}.bind(this);
var isString = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'string';
}.bind(this);
var isBoolean = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'boolean';
}.bind(this);
var isFunction = function (value) {
  _newArrowCheck(this, _this);

  return typeof value === 'function';
}.bind(this);
var isArray = function (value) {
  _newArrowCheck(this, _this);

  return getProtoType(value) === 'array';
}.bind(this);
var isObjectLike = function (value) {
  _newArrowCheck(this, _this);

  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
}.bind(this);
var isObject = function (value) {
  _newArrowCheck(this, _this);

  return isObjectLike(value) && !isArray(value);
}.bind(this);
var isPlainObject = function (value) {
  _newArrowCheck(this, _this);

  return isObject(value) && value.constructor === Object;
}.bind(this);
var isRegExp = function (value) {
  _newArrowCheck(this, _this);

  return isObjectLike(value) && value.constructor === RegExp;
}.bind(this);
var isDate = function (value) {
  _newArrowCheck(this, _this);

  return isObjectLike(value) && value.constructor === Date;
}.bind(this);
var isInteger = function (value) {
  _newArrowCheck(this, _this);

  try {
    return Number.isInteger(value);
  } catch (error) {
    isNumber(value) && Math.floor(value) === value;
  };
}.bind(this);

var forEach = function (object, callbcak) {
  _newArrowCheck(this, _this);

  if (!isObjectLike(object) && !isString(object)) throw new TypeError('object must be a Object or Array or String');

  if (isObject(object)) {
    for (var key in object) {
      callbcak(object[key], key, object);
    };
  } else if (object.length) {
    for (var i = 0; i < object.length; i++) {
      callbcak(object[i], i, object);
    };
  };
}.bind(this);

var indexOf = function (object, value) {
  _newArrowCheck(this, _this);

  var index = -1;

  if (isArray(object) || isString(object)) {
    try {
      return object.indexOf(value);
    } catch (error) {
      for (var i = 0; i < object.length; i++) {
        if (object[i] === value) return i;
      };
    };
  } else {
    forEach(object, function (item, key) {
      _newArrowCheck(this, _this);

      if (item === value) index = key;
    }.bind(this));
  };

  return index;
}.bind(this);

var includes = function (object, value) {
  _newArrowCheck(this, _this);

  var result = false;

  if (isArray(object) || isString(object)) {
    try {
      return object.includes(value);
    } catch (error) {
      return indexOf(object, value) > -1;
    }
  } else {
    forEach(object, function (item) {
      _newArrowCheck(this, _this);

      if (item === value) result === true;
    }.bind(this));
  };

  return result;
}.bind(this);

/**
 * Object.assign polyfill
 * Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
 *
 * @params {Object} target 目标对象
 * @params {Object} sources 任意多个源对象
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

var now = function () {
  _newArrowCheck(this, _this);

  return new Date().getTime();
}.bind(this);

var random = function () {
  _newArrowCheck(this, _this);

  return Math.round(now() * Math.random());
}.bind(this);

var stampArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomStamp = function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var repeat = arguments[1];

  _newArrowCheck(this, _this);

  var stampLength = stampArr.length;
  var stamp = '';

  for (var i = 0; i < length; i++) {
    var rnd = stampArr[Math.floor(Math.random() * stampLength)];
    if (!repeat) {
      while (indexOf(stamp, rnd) === -1) {
        stamp += rnd;
      }
    } else {
      stamp += rnd;
    };
  };

  return stamp;
}.bind(this);

var _ = { isUndefined: isUndefined, isNull: isNull, isNumber: isNumber, isString: isString, isBoolean: isBoolean, isFunction: isFunction, isRegExp: isRegExp, isDate: isDate, isArray: isArray, isObjectLike: isObjectLike, isObject: isObject, isPlainObject: isPlainObject, isInteger: isInteger, forEach: forEach, indexOf: indexOf, includes: includes, assign: assign, now: now, random: random, randomStamp: randomStamp };

export { _, isUndefined, isNull, isNumber, isString, isBoolean, isFunction, isRegExp, isDate, isArray, isObjectLike, isObject, isPlainObject, isInteger, forEach, indexOf, includes, assign, now, random, randomStamp };
export default _;