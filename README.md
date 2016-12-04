[tiny.js](https://github.com/shusiwei/tiny)一个现代JavaScript实用程序库，可以运行在NodeJS和现代浏览器中。

该项目代码[托管在GitHub](https://github.com/shusiwei/tiny)

##阅读说明

```javascript
function(a, b[, c, d]) // 参数a, b 为必要参数，c, d为可选参数
* a = String ['app'] // 参数a的数据类型为 string , 默认参数为'app'，* 代表必填参数, [] 代表参数默认值
// 这是里条注释 ['route/a', 'route/old/a'] // 参数书写范例（仅限 [ ] 括号中的内容）
```

##安装
####git

```bash
git clone https://github.com/shusiwei/tiny.git
```

####npm

```bash
npm install --save shusiwei/tiny
```

####bower

```bash
bower install --save shusiwei/tiny
```

##使用（Use）

####CommonJS
```javascript
const tiny = require('tiny');
```
####ES2015
```javascript
import tiny form 'tiny';

// 或是方法名，例如：
import {isArray} form 'tiny';
```

##基础方法

####isUndefined
判断一个值的数据类型是否为undefined
```javascript
isUndefined(undefined)
// -> true

isUndefined(null)
// -> false

isUndefined(1)
// -> false

isUndefined(false)
// -> false
```

####isNull
判断一个值的数据类型是否为null
```javascript
isNull(undefined)
// -> false

isNull(null)
// -> true

isNull(1)
// -> false

isNull(false)
// -> false
```

####isNumber
判断一个值的数据类型是否为Number
```javascript
isNumber(undefined)
// -> false

isNumber(null)
// -> false

isNumber(1)
// -> true

isNumber(0.98)
// -> true

isNumber('1.6')
// -> false

isNumber(false)
// -> false
```

####isString
判断一个值的数据类型是否为String
```javascript
isString(undefined)
// -> false

isString(null)
// -> false

isString(1)
// -> false

isString(0.98)
// -> false

isString('1.6')
// -> true

isString('hello world')
// -> true

isString('')
// -> true

isString(false)
// -> false
```

####isBoolean
判断一个值的数据类型是否为Boolean
```javascript
isBoolean(undefined)
// -> false

isBoolean(null)
// -> false

isBoolean({key: value})
// -> false

isBoolean(1)
// -> false

isBoolean(0.98)
// -> false

isBoolean('hello world')
// -> false

isBoolean(false)
// -> true
```

```javascript
isUndefined(value) // 判断一个元素是否为undefined
isNull(value) // 判断一个元素是否为 null
isObject(object) // 判断一个元素是否为object
isNumber(object) // 判断一个元素是否为一个数字
isArray(object) // 判断一个元素是否为一个数组
isString(object) // 判断一个元素是否为字符串
isFunction(object) // 判断一个元素是否为函数
isBoolean(value) // 判断一个元素是否为布尔值
isRegExp(value) // 判断一个元素是否为正则
isDate(object) // 判断一个元素是否为一个Date对象
isElement(object) // 判断一个元素是否为 DOM对象
isNodeList(object) // 判断一个元素是否为 DOM 集合
```

####indexOf

```javascript
indexOf(object, value) // 得到一个值在某个集合中的索引位置，如果不存在则返回-1
* object = array/object/string // 集合
* value = * // 值
```

####includes
```javascript
includes(object, value) // 得到一个集合中是否包含某个值
* object = array/object/string // 集合
* value = * // 值
```
##方法集合

####getTimeStamp

```javascript
tiny.getTimeStamp() // 得到当前时间戳
```

####getRandom
```javascript
tiny.getRandom() // 得到一个随机数
```

####getRandomStamp

```javascript
tiny.getRandomStamp(length, repeat) // 得到一个随机戳
length = number [16] // 长度
repeat = boolean [false] // 字符是否允许重复
```
