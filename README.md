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

####isFinite
判断一个值是否为有穷数
```javascript
isFinite(15)
// -> true

isFinite(Number.MIN_VALUE)
// -> false

isFinite(Infinity)
// -> false

isFinite(NaN)
// -> false

isFinite('8')
// -> false
```

####isInteger
判断一个值是否为整数
```javascript
isInteger(15)
// -> true

isInteger(0)
// -> true

isInteger(1.8)
// -> false
```

####isFloat
判断一个值是否为浮点数
```javascript
isFloat(15)
// -> false

isFloat(0)
// -> false

isFloat(1.8)
// -> false
```

####isSafeInteger
判断一个值是否为浮点数
```javascript
isSafeInteger(15)
// -> true

isSafeInteger(0)
// -> true

isSafeInteger(1.8)
// -> false
```

####isPositive
判断一个值是否为正数
```javascript
isPositive(15)
// -> true

isPositive(0)
// -> false

isPositive(-1.5)
// -> false
```

####isNegative
判断一个值是否为负数
```javascript
isNegative(15)
// -> false

isNegative(0)
// -> false

isNegative(-1.5)
// -> true
```


####isPosiInteger
判断一个值是否为正整数
```javascript
isPosiInteger(15)
// -> true

isPosiInteger(1.8)
// -> false

isPosiInteger(-5)
// -> false

isPosiInteger(0)
// -> false
```

####isNegaInteger
判断一个值是否为负整数
```javascript
isNegaInteger(15)
// -> false

isNegaInteger(1.8)
// -> false

isNegaInteger(-5)
// -> true

isNegaInteger(0)
// -> false
```

####isPosiFloat
判断一个值是否为正浮点数
```javascript
isPosiFloat(15)
// -> false

isPosiFloat(1.8)
// -> true

isPosiFloat(-5)
// -> false

isPosiFloat(-5.8)
// -> false

isPosiFloat(0)
// -> false
```

####isNegaFloat
判断一个值是否为负浮点数
```javascript
isNegaFloat(15)
// -> false

isNegaFloat(1.8)
// -> false

isNegaFloat(-5)
// -> false

isNegaFloat(-5.8)
// -> true

isNegaFloat(0)
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
