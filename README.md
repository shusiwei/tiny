A modern JavaScript utility library

[tiny.js](https://github.com/shusiwei/tiny)一个现代JavaScript实用程序库。

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

####bower

```bash
bower install --save shusiwei/tiny
```

##使用（Use）

####页面引入

```html
<script type="text/javascript" src="./js/tiny.js"> // 引入JS文件
```

###AMD&CMD

```javascript
// 引入Helper模块
var tiny = require('tiny');

// es2015

import {tiny} form 'tiny';
```

##基础方法

####is

```javascript
tiny.is(type, object) // 判断一个元素是否为某种数据类型
* type = string // 检测的数据类型 'nickname' : 昵称/姓名, 'cell' : 手机号码, 'tel' : 电话号码, 'phone' : 手机和电话号码, 'email' : 邮箱号码, 'integer' : 整型数字, 'chinese' : 中文字符
* object = * // 被检测的数据
```

```javascript
tiny.isUndefined(value) // 判断一个元素是否为undefined
tiny.isNull(value) // 判断一个元素是否为 null
tiny.isObject(object) // 判断一个元素是否为object
tiny.isNumber(object) // 判断一个元素是否为一个数字
tiny.isArray(object) // 判断一个元素是否为一个数组
tiny.isString(object) // 判断一个元素是否为字符串
tiny.isFunction(object) // 判断一个元素是否为函数
tiny.isBoolean(value) // 判断一个元素是否为布尔值
tiny.isRegExp(value) // 判断一个元素是否为正则
tiny.isDate(object) // 判断一个元素是否为一个Date对象
tiny.isElement(object) // 判断一个元素是否为 DOM对象
tiny.isNodeList(object) // 判断一个元素是否为 DOM 集合
```

####indexOf

```javascript
tiny.indexOf(object, value) // 得到一个值在某个集合中的索引位置，如果不存在则返回-1
* object = array/object/string // 集合
* value = * // 值
```

####includes
```javascript
tiny.includes(object, value) // 得到一个集合中是否包含某个值
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
