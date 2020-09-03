---
title: JavaScript变量与数据类型
permalink: /f2e/javascript/data-type
---

# JavaScript变量与数据类型

## JavaScript有哪些基本数据类型？

JavaScript有八大基本数据类型，分别是null, undefined, number, bigint, string, boolean, symbol, object

前面七种是原始类型，`object`是引用类型。

## 原始类型和引用类型有什么区别？

本质上的区别在于在内存中的存储方式。

原始类型的值直接存放在栈中；而引用类型则是把值存放在堆中，栈中存放堆中该值所在的地址，引用值的地址所以称之为引用类型。

存储方式的设计决定了原始类型不可变的特性。栈中分配给一个数据的内存空间在数据入栈时就已固定，无法再更改。在程序中一般使用变量作为数据的载体，当对一个存储原始类型数据的变量进行操作再赋值时，其实是在栈中为新数据划分内存空间，再将变量指向这块空间。举例来说`str += "1"`这样的操作，字符串"1"并没有被修改。

引用类型则没有不可变的限制，由于其值存放在堆中，堆中的空间是动态的，对堆中内容进行修改，并没有更改其在堆中的地址。

与对象不同，原始类型数据本身只存了一个值，它本身并没有带属性和方法。在访问原始类型的属性和方法时，JavaScript内部创建一个对象包装器，包含原始值和对象上的方法。执行完操作之后返回新值，并将对象包装器销毁。这也就是对原始类型变量做属性更改操作，最终属性未添加成功的原因。

``` js
let str = "Hello";

str.test = 5;

alert(str.test);
```

## 不同类型的数据之间是怎么转换的？

### 原始类型转换为引用类型

- 原始类型可以通过`Object()`函数转换为引用类型。`null`和`undefined`会被转换为空对象，其他类型转换为对应的包装对象。

- `number/string/boolean`也可以通过构造函数创建包装对象，例如`new String("123")`，`BigInt/Symbol`函数不能当作构造函数使用。

原始类型的对应函数：
- 当作包装函数使用，效果是数据类型转换；
- 当作构造函数使用，效果是产生包装对象。

### 原始类型间转换

首先是比较特殊的类型：

1. `null`和`undefined`可转出，无法转入
2. `symbol`类型
   - 转出：只能转换为`boolean`，其他转换抛出`TypeError`
   - 转入：直接转为`symbol`，原始值转换为字符串描述


| 原数据类型 | Number()转换规则                                             |
| ---------- | ------------------------------------------------------------ |
| bigInt     | 转换为普通整数，超出安全整数范围可能会出现精度丢失           |
| string     | 忽视前后空格从左到右转换字符，遇到无法转换为数字的字符返回`NaN`<br />如果最终是空字符串返回`0` |
| boolean    | `false`转换为`0`，`true`转换为`1`                            |
| null       | `0`                                                          |
| undefined  | `NaN`                                                        |

| 原数据类型 | BigInt()转换规则                                             |
| ---------- | ------------------------------------------------------------ |
| number     | 只能转换整数，非整数抛出`RangeError`                         |
| string     | 转换过程类似string to number，<br />无法转换为整数的字符串，抛出`SyntaxError` |
| boolean    | `false`转换为`0n`，`true`转换为`1n`                          |
| null       | `TypeError`                                                  |
| undefined  | `TypeError`                                                  |

| 原数据类型 | String()转换规则 |
| ---------- | ---------------- |
| *          | 简单转换为字符串 |

| 原数据类型 | Boolean()转换规则                                      |
| ---------- | ------------------------------------------------------ |
| *          | `0`,` 0n`, `null`,` undefined`,` NaN`,` ""` -> `false` |

### 引用类型转换为原始类型

Boolean转换：按照ECMA规范，`object`转换为`boolean`，其值为`true`

其他原始类型转换：采用toPrimitive机制。

**toPrimitive机制**

引用类型转换为原始类型的期望值`hint`只有三种`"string"/"number"/"default"`

JavaScript规范明确定义各种转换情况对应的期望值，然后调用`obj[Symbol.toPrimitive](hint)`进行转换

- 如果`hint`是`"number"/"default"`，先调用`valueOf`，如果返回值不是原始类型，再调用`toString`，
- 如果`hint`是`"string"`，先调用`toString`，如果返回值不是原始类型，再调用`valueOf`，
- 如果最终返回值不是原始类型，抛出`TypeError`

为了防止`TypeError`错误，一般规定`toString`的返回值需要是原始类型值。



## 运算符和隐式转换的关系

- 布尔值转换：条件判断，非逻辑，或与逻辑在判断时进行转换（或与逻辑返回原始值）
- 数值转换：算数操作，一元运算符，值比较（不进行转换的特例：同为字符串/同为对象/相等比较中的null和undefined）
- 字符串转换：二元加法运算符其中一个运算元是字符串，String方法调用



## 有哪些判断数据类型的方法，分别适用于什么场景？

### typeof

1. 用于判断原始类型。注意`typeof null`是`object`，这是一个语言设计的bug，需要另外判断
2. 用于判断是否是函数，`typeof function`，`function`是一个`object`类型的数据，但会具体识别为`function`

``` js
typeof 1; // "number"
typeof 1n; // "bigint"
typeof null; // "object"
typeof []; // "object"
typeof new Date(); // "object"
typeof function () {}; // "function"
```

### instanceof/isPrototypeOf()

`A instanceof ClassB`，判断`ClassB.prototype`是否在`A`的原型链上。

1. 原始类型数据本身不是对象，没有原型链，因此不能使用`instanceof`判断
2. 可判断引用类型对象，是否继承自另一个对象

``` js
[] instanceof Array; // true
[] instanceof Object; // true

ClassB.isPrototypeOf(obj) === obj instanceof ClassB
```

### toString

所有对象都继承`Object.prototype`上的属性和方法，其中就包括`toString`方法。`Object.prototype.toString()`会检查`this`返回`[object type]`，`type`是对象的类型。

内置包装对象（`String/Number/Boolean...`）、扩展对象（`Array/Date/RegExp/Function...`）都重写了`toString`方法。因此需要通过`call`来调用`Object.prototype.toString`方法获取包含对象类型信息的字符串

``` js
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call(1); // [object Number]
Object.prototype.toString.call(function () {}); // [object Function]
```

通过`Symbol.toStringTag`属性自定义`Object.prototype.toString`方法返回值

``` js
let arr = [];
arr[Symbol.toStringTag] = "User"

{}.toString.call(user); // [object User]
arr.toString(); // ""
```

