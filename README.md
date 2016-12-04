[tiny.js](https://github.com/shusiwei/tiny)一个现代JavaScript实用程序库，可以运行在NodeJS和现代浏览器中。
该项目代码[托管在GitHub](https://github.com/shusiwei/tiny)

##注释说明

```javascript
// 参数a, b 为必要参数，c, d为可选参数
function(a, b[, c, d]) {

}
* a = String ['default value'] // 参数a的数据类型为 string , 默认参数为'default value'，* 代表必填参数, [] 代表参数默认值
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

##使用

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

##方法

####isUndefined
判断一个值的数据类型是否为undefined
```javascript
isUndefined(undefined)
// -> true

isUndefined(null)
// -> false
```

####isNull
判断一个值的数据类型是否为null
```javascript
isNull(undefined)
// -> false

isNull(null)
// -> true
```

####isNumber
判断一个值的数据类型是否为Number
```javascript
isNumber(1)
// -> true

isNumber(0.98)
// -> true

isNumber('1.6')
// -> false
```

####isString
判断一个值的数据类型是否为String
```javascript
isString(1.6)
// -> false

isString('1.6')
// -> true

isString('hello world')
// -> true

isString('')
// -> true
```

####isBoolean
判断一个值的数据类型是否为Boolean
```javascript
isBoolean(undefined)
// -> false

isBoolean(1)
// -> false

isBoolean(false)
// -> true
```

####isFunction
判断一个值的数据类型是否为Boolean
```javascript
isFunction(() => {});
// -> true

isFunction(parseInt);
// -> true

isFunction({key: value})
// -> false
```

####isObject
判断一个值的数据类型是否为Object
```javascript
isObject({key: value});
// -> false

isObject(new Foo);
// -> true

isObject(null);

isObject([1, 2, 3]);
// -> false
// -> flase
```

####isArray
判断一个值的数据类型是否为Boolean
```javascript
isArray([1, 2, 3]);
// -> true

isArray({0: 1, 1: 2, length: 2});
// -> flase
```

####isObjectLike
判断一个值的数据类型是否为类似于Object的对象
```javascript
isObjectLike([1, 2, 3]);
// -> true

isObjectLike({key: value});
// -> true

isObjectLike(arguments);
// -> true

isObjectLike(new Foo);
// -> true

isObjectLike(null);
// -> flase
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
