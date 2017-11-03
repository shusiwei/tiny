/*
 * tiny-node.js
 * Description : A modern JavaScript utility library for browser.
 * Coder : shusiwei
 * Date : 2016-08-22
 * Version : 1.0.0
 *
 * https://github.com/shusiwei/tiny-node
 * Licensed under the MIT license.
 */
import {isUndefined, isNull, isPlainObject, isString, forEach, isPosiInteger, trim} from './index';

const {document} = window;
const addEventListener = (el, fn, ...types) => {
  if (types.length === 0) throw new Error('at least one event name is required');

  for (let type of types) {
    el.addEventListener(type, fn);
  };

  return el;
};
const removeEventListener = (el, fn, ...types) => {
  if (types.length === 0) throw new Error('at least one event name is required');

  for (let type of types) {
    el.removeEventListener(type, fn);
  };

  return el;
};

/**
 * @name 创建一个带有类似数组长度的Object对象
 *
 * @return 返回该对象
 */
const makeArrayLikeObject = () => Object.defineProperty({}, 'length', {value: 0, writable: true, enumerable: false});

/**
 * @name 将一个对象序列化为一个queryString字符串
 *
 * @param {Object} source * 操作的对象
 *
 * @return {String} queryString字符串
 */
export const serialize = (...sources) => {
  if (sources.length === 0) return '';

  const result = [];

  for (let source of sources) {
    if (!isPlainObject(source)) throw new TypeError('source must b a plain Object');

    for (let key in source) {
      if (!isUndefined(source[key]) && !isNull(source[key])) result.push(key + '=' + encodeURIComponent(trim(source[key].toString())));
    };
  };

  return result.join('&');
};

/**
 * @name 将一个queryString字符串转化成一个对象
 *
 * @param {String} source * 操作的对象
 * @param {String} keys 需要返回值的key
 *
 * @return {Object} 当keys参数为空时，返回该对象，当keys参数只有一个时，则返回该对象中key为此参数的值，当keys参数有多个时，则以一个对象的形式返回该对象所有keys中的参数的值
 */
export const queryParse = (source, ...keys) => {
  if (!isString(source)) throw new TypeError('source must b a String');

  const result = makeArrayLikeObject();

  forEach(source.replace(/^\?/, '').split('&'), string => {
    const item = string.split('=');

    result[item[0]] = item[1];
    result.length++;
  });

  if (keys.length === 0) return result;
  if (keys.length === 1) return result[keys[0]];

  const dumpData = makeArrayLikeObject();

  forEach(keys, key => {
    dumpData[key] = result[key];
    dumpData.length++;
  });

  return dumpData;
};

/**
 * @name 将cookie字符串转化成一个对象
 *
 * @param {String} keys 需要返回值的key
 *
 * @return {Object} 当keys参数为空时，返回该对象，当keys参数只有一个时，则返回该对象中key为此参数的值，当keys参数有多个时，则以一个对象的形式返回该对象所有keys中的参数的值
 */
export const cookieParse = (...keys) => queryParse(document.cookie.replace(/; /g, '&'), ...keys);

/**
 * @name 设置cookie
 *
 * @param {String} name * cookie名称
 * @param {String} value * cookie值
 * @param {Object} options 过期天数&其它参数
 * @param {String} options.path cookie所在路径
 * @param {String} options.domain cookie所在域
 * @param {String} options.secure cookie是否只允许在安全链接中读取
 */
export const setCookie = (name, value, ...options) => {
  let cookie = name + '=' + value;

  for (let option of options) {
    if (isPosiInteger(option)) {
      const date = new Date();
      date.setTime(date.getTime() + option * 24 * 60 * 60 * 1000);

      cookie += ';expires=' + date.toGMTString();
    };

    if (isPlainObject(option)) {
      if (option.path) cookie += ';path=' + option.path;
      if (option.domain) cookie += ';domain=' + option.domain;
      if (option.secure) cookie += ';secure=' + option.secure;
    };
  };

  document.cookie = cookie;

  return cookieParse();
};

export class Sticky {
  constructor(target, body) {
    this.target = target;
    this.body = body;

    this.position = window.getComputedStyle(this.target).position;

    this.bind();
    this.update();
  }
  update() {
    if (this.checkIsHit()) {
      this.target.style.position = this.position;
    } else {
      this.target.style.position = 'fixed';
    };
  }
  checkIsHit() {
    const targetRect = this.target.getBoundingClientRect();
    const bodyRect = this.body.getBoundingClientRect();

    return window.pageYOffset + bodyRect.bottom + targetRect.height > window.innerHeight;
  }
  bind() {
    this.event = () => this.update();

    addEventListener(window, this.event, 'resize', 'scroll');
  }
  destroy() {
    removeEventListener(window, this.event, 'resize', 'scroll');
  }
};

export const isChildNode = (child, parent) => {
  if (child === parent) return true;
  let target = child;

  while (target && target.nodeType !== 11) {
    if (target === parent) {
      return true;
    } else {
      target = target.parentNode;
    };
  };

  return false;
};
