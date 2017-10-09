import {includes} from './index';

const ua = window.navigator.userAgent.toLowerCase();
const android = ua.match(/(android);?[\s/]+([\d.]+)?/i);
const ipad = ua.match(/(ipad).*os\s([\d_]+)/i);
const ipod = ua.match(/(ipod)(.*os\s([\d_]+))?/i);
const iphone = !ipad && ua.match(/(iphone\sos)\s([\d_]+)/i);

export const isiOS = (...args) => (ipad || ipod || iphone) && (args.length === 0 || ua.match(/(os)\s([\d_]+)/)[2].replace(/_/g, '.').search(args[0]) === 0);
export const isAndroid = (...args) => android && (args.length === 0 || android[2].search(args[0]) === 0);
export const isMobileOS = isiOS() || isAndroid();
export const isKernel = name => !!ua.match(name);
export const isWebkit = isKernel('applewebkit');
export const isWechat = includes(ua, 'micromessenger');
export const isSafari = includes(ua, 'safari') && !includes(ua, 'chrome');
export const isChrome = includes(ua, 'chrome');
export const isFirefox = includes(ua, 'firefox');
