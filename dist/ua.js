import { includes } from './index';

var ua = window.navigator.userAgent.toLowerCase();
var android = ua.match(/(android);?[\s/]+([\d.]+)?/i);
var ipad = ua.match(/(ipad).*os\s([\d_]+)/i);
var ipod = ua.match(/(ipod)(.*os\s([\d_]+))?/i);
var iphone = !ipad && ua.match(/(iphone\sos)\s([\d_]+)/i);

export var isiOS = function isiOS() {
  return (ipad || ipod || iphone) && (arguments.length === 0 || ua.match(/(os)\s([\d_]+)/)[2].replace(/_/g, '.').search(arguments.length <= 0 ? undefined : arguments[0]) === 0);
};
export var isAndroid = function isAndroid() {
  return android && (arguments.length === 0 || android[2].search(arguments.length <= 0 ? undefined : arguments[0]) === 0);
};
export var isMobileOS = isiOS() || isAndroid();
export var isKernel = function isKernel(name) {
  return !!ua.match(name);
};
export var isWebkit = isKernel('applewebkit');
export var isWechat = includes(ua, 'micromessenger');
export var isSafari = includes(ua, 'safari') && !includes(ua, 'chrome');
export var isChrome = includes(ua, 'chrome');
export var isFirefox = includes(ua, 'firefox');