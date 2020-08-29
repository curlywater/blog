---
title: TypeScript使用文档
permalink: /f2e/typescript/handbook
---

# TypeScript使用文档

TypeScript官方文档要点提炼。

## TypeScript的立意

JavaScrip是一门弱类型、动态语言。

弱类型即无需指定变量类型，动态即一个变量可以保存不同类型的数据。

TypeScript在JavaScript的基础上加了一层类型系统。

TypeScript希望提供强类型静态语言支持，降低人为产生bug的概率。

## 基本类型

- `boolean`
- `number`
- `bigint`
- `string`
- `symbol`
- `null`
- `undefined`
- `object`: 包含所有非原始类型

除JavaScript提供的基本类型之外，TypeScript还提供了一些类型扩展

### Array

元素类型统一的数组，有以下两种书写方式：

``` ts
let chars: string[] = ["a", "b"]; // 类型声明前置
let numbers: Array<number> = [1, 2, 3]; // 泛型
```

**扩展：`ReadOnlyArray`只读数组。**
- 无法修改元素值（属性只读）
- 无法进行数组操作（无数组方法）
- 普通数组可直接赋值给只读数组，只读数组赋值给普通数组需要强转

``` ts
let readonlyList: ReadonlyArray<number> = [1, 2, 3];
readonlyList[0] = 0; // Index signature in type 'readonly number[]' only permits reading.
readonlyList.push(4); // Property 'push' does not exist on type 'readonly number[]'.
readonlyList.length = 0; // Cannot assign to 'length' because it is a read-only property.
let list1: number[] = readonlyList; // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
let list2: number[] = readonlyList as Array<number>;
```

### Tuple

元组：元素类型不一致的数组，需要严格规范数组元素的分布。

``` ts
let list: [string, number, string] = ["1", 1, "2"];
list[4] = 2; // Type '3' is not assignable to type 'undefined'.

list.push(3);
list[3].toFixed(2); // Object is possibly 'undefined'.
```

### Enum

枚举类型，为一组数据设置名字，数据默认从0开始递增；也可手动自定义值。

借助反向映射，通过数据逆向查找到对应的名字。

``` ts
enum LockState {
    Locked,
    Unlocked
}

let isLocked = LockState.Locked;
let lockState: string = LockState[1];
```

### Unknown

未知类型。

- 因为未知，所以TS认为无法对该类型值做任何操作
- 无法赋值给其他类型
- 但可以通过类型判断再处理

``` ts
let data: unknown;
data = 1;

console.log(data.toFixed()); // Object is of type 'unknown'.

if (typeof data === "number") {
  console.log(data.toFixed());
}
```

### Any

任意类型，相当于忽视类型检查。允许对该类型数据做任何操作。

``` ts
let data: any = {
    isValid: true
};

data.isValid;
```

### Void

`undefined` | `null`(未设置`--strictNullChecks`的情况下)。

一般用于函数无返回值或返回值为`undefined`的情况。

``` ts
const handleOnClick = (): void => {
    console.log("clicked");
}
```

### Never

永远不会有值。譬如下列函数的返回值：
- 内部抛出异常的函数
- 内部无限循环的函数

::: tip strictNullChecks
在未设置`strictNullChecks`的编译环境中，`undefined/null`是所有类型的子类。
在设置`strictNullChecks`的编译环境中，`null`只能赋值给`any/unknown`类型的变量，`undefined`只能赋值给`any/unknown/void`
:::

### 类型断言

人为强制类型转换

``` ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // 使用JSX时，只能使用as语句
```

## 接口

接口：声明一个复杂类型。

### 鸭式辩型

1. 传入对象的部分属性能满足所需属性即可
2. 无需同类型
3. 与对象生成过程和实现细节无关。


### 接口中声明可选属性

``` ts
interface Button {
    text: string;
    color?: string;
}
```

### 接口中声明只读属性

``` ts
interface Point {
    readonly x: number;
    readonly y: number;
}
```

只读属性只能在初始化时定义，后续无法通过赋值进行修改。

### 额外的类型检查

对象字面量赋值给变量或者用作函数参数时，TS对对象字面量进行额外检查；如果对象字面量中包含不属于接口定义的部分，会判定类型不同。

``` ts
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

printLabel({ size: 10, label: "111" }); // Argument of type '{ size: number; label: string; }' is not assignable to parameter of type 'LabeledValue'
```

解决多余类型检查的方法：

1. 使用类型断言

``` ts
printLabel({ size: 10, label: "111" } as LabeledValue); 
```

2. 允许接口扩展其他属性

``` ts
interface LabeledValue {
    label: string;
    [propName: string]: any
}
```

3. 避免直接使用对象字面量，赋值给中间变量

``` ts
const obj = { size: 10, label: "111" };
printLabel(obj); 
```

### 使用接口声明函数

``` ts
interface SearchFunction {
    (source: string, keyword: string): boolean;
}

let searchFunction: SearchFunction = (str, keyword) => {
    return str.includes(keyword);
}

searchFunction("Hello world.", 3); //Argument of type 'number' is not assignable to parameter of type 'string'.
```

- 按参数位置匹配类型，参数名无需一致
- 函数中可不定义参数类型，typescript会根据interface自动推导
- 返回值类型同样也会匹配

### 使用接口声明索引类型

``` ts
interface StringArray {
    [index: number]: string
}

let chars: StringArray = ["a", "z"];
```

因为JavaScript会把数值型的索引转换为字符串，因此字符串索引对应的type需要是数值索引对应type的父类。

``` ts
interface TwoDimensonalArray {
    [index: number]: Array<any>,    // Numeric index type 'any[]' is not assignable to string index type 'string'.
    [index: string]: string
}

let chars: TwoDimensonalArray = ["a", "z"];
```

### 类和接口

**类实现接口**

类实现接口时，TypeScript只会对类中定义的实例部分进行类型检查。

``` ts
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```

**接口声明类静态部分**

使用类表达式

``` ts
// @strictPropertyInitialization: false
// @noImplicitAny: fals
interface ClockConstructor {
  new (hour: number, minute: number): any;
}

interface ClockInterface {
  tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};
```

### 接口继承

``` ts
interface Shape {
    width: number;
    height: number;
}
interface PenStroke {
    weight: "normal" | "bold" | "bolder"
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}

const square: Square = {width: 100, height: 100, weight: "bold", sideLength: 20};
```

- 将一个接口的成员复制到另一个接口中
- 一个接口可以继承自多个接口

### 混合类型

因为JavaScript动态灵活的特点，会出现多种类型组合的对象，比方说带有属性的函数。TS也可以实现

``` ts
interface Counter {
    (start: number): string,
    interval: number;
    reset(): boolean
}

let counter = function (start: number) {} as Counter;
counter.interval = 123;
counter.reset = function () {};
```


## 函数

函数声明由参数和返回值组成。

只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。

返回值必须声明，如果函数无返回值，需要声明为`void 0`。

函数定义可不写类型，会通过类型声明推断。

函数声明的几种方式：

``` ts
// 函数声明式
function myFunc1(x: number, y: number): number {
    return x + y;
}

// 函数表达式
let myFunc2 = function(x: number, y: number): number {
    return x + y;
}
let myFunc3 = (x: number, y: number): number => {
    return x + y;
}

// 声明提前
let myFunc4: (x: number, y: number) => number = function (x, y) {return x + y;}
let myFunc4: (x: number, y: number) => number = (x, y) => {return x + y;}
```

**可选参数**

``` ts
function myFunc(x: number, y?: number):number {
    return x + (y ?? 0)
}
```

**参数默认值**

``` ts
function myFunc(x: number, y: number = 0) {
    return x + y;
}
```

**剩余参数**

``` ts
function myFunc(x: number, ...rest: number[]) {
    return x + rest.length ? rest.reduce((sum, num) => sum * num, 1) : 0;
}
```

**重载**

``` ts
function myFunc(x: number, ...rest: number[]): number;
function myFunc(nums: number[]): number;
function myFunc(x: any, ...rest: any) {
    if (typeof x == "number") {
        return x + rest.reduce((sum: number, num: number): number => sum + num, 0);
    } else if (typeof x == "object") {
        return x.reduce((sum: number, num: number) => sum + num, 0);
    }
}

myFunc(1, 2, 3);
myFunc([1,2,3]);
```

函数重载声明 + 函数处理逻辑

## 字面量类型

字符串、数值、布尔值可通过Union连接符声明变量取值范围。

``` ts
const language = "en" | "zh-cn" | "ru"
```

可以根据参数类型进行函数重载

``` ts
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
  // ... code goes here ...
}
```

## 联合和交叉类型

### 联合类型 |

只能访问共同的字段

``` ts
interface Dog {
    name: "dog";
    sleep(): void;
    run(): void;
}
interface Duck {
    name: "duck";
    sleep(): void;
    swim(): void;
}

declare function getSmallPet(): Dog | Duck;

let pet = getSmallPet();
pet.sleep();
pet.run(); // Property 'run' does not exist on type 'Duck'.

```
- 通过一个共有字段，辨别类型
- 全面检查各种情况对应的返回值

### 交叉类型 &

把现有的多种类型叠加到一起成为一种类型。

需要确保类型之间没有冲突的字段。

``` ts
interface Dog {
    sleep(): void;
    run(): void;
}
interface Duck {
    sleep(): void;
    swim(): void;
}

declare function getSmallPet(): Dog & Duck;

let pet = getSmallPet();
pet.sleep();
pet.run(); 

```

## 类

### `public/private/protected/readonly`修饰符

所有的属性默认是`public`

**`private`属性**

不能在声明它的类外部使用

::: tip 说明
TypeScript 3.8版本，开始支持JavaScript的私有属性语法

``` ts
class Animal {
    #name: string;
    constructor (theName: string) {
        this.#name = theName;
    }
}

console.log(new Animal("dog").#name); // Property '#name' is not accessible outside class 'Animal' because it has a private identifier.
```
:::

``` ts
class Animal {
    private name: string;
    constructor (theName: string) {
        this.name = theName;
    }
}
```

**`protected`属性**

`protected`修饰符与`private`修饰符的行为很相似，但有一点不同，`protected`成员在派生类中仍然可以访问。

使用`protected`修饰构造函数，类无法被直接实例化，只可在派生类中通过`super`调用。

**`readonly`属性**

必须在声明时或者在构造函数里被初始化，

``` ts
class Animal {
    readonly name: string
    constructor (theName: string) {
        this.name = theName
    }
}
```

::: warning

TS使用鸭式辨型，但在存在`private`/`protected`成员时，只有来自同一处声明，才认为这两个类型是兼容的。
:::

### 参数属性

``` ts
class Animal {
    constructor (private name: string) {}
}
```

在`constructor`参数重直接定义属性，参数前需要使用修饰符修饰。


### getter/setter

``` ts
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
```

使用前提：将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 

只带有 get不带有 set的属性自动被推断为 readonly。


### 静态属性

属于类本身，不属于实例对象

``` ts
class Grid {
    static origin = {x: 0, y: 0}; 
}

console.log(Grid.origin.x);
```

### 抽象类

不能直接实例化，由派生类具体实现抽象方法。

使用`abstract`关键字修饰抽象类和抽象方法。

抽象类描述一个实体，该实体上包含需要通过具体场景确认的部分，通过派生类具体实现。

``` ts
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}
```

### 类定义的类型

类的定义创建出两样东西：类的实例类型和构造函数。

``` ts
class Animal {}

let dog: Animal = new Animal(); // 实例类型
let animal: typeof Animal = Animal;  // 类的类型
```

**接口继承类**

接口是复杂类型的定义，因为类定义了类型，因此可以被接口继承。

- 接口可以继承自类，它会继承类的成员但不包括其实现。
- 接口会继承类的`private`和`protected`成员。这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现。（因为`private`和`protected`类型检查限制）。


## 枚举

枚举可以分为两种情况考虑：所有枚举成员都指定字面量枚举值，存在需要通过初始化器计算的枚举成员

枚举成员需要通过初始化器计算:
- 需计算的枚举项之前必须有数字枚举值，提供初始化器

所有枚举成员都指定字面量枚举值:
- 每个枚举成员对应一个类型
- 枚举类型本身变成了每个枚举成员的联合

### 反向映射

键 <-> 值

枚举本质是通过编译生成一个双向对象。因此不会为字符串枚举成员生成反向映射。

因此枚举对象在运行时是真实存在于内存中的。

``` ts
enum Enum {
  A
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```

``` js
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```

### 外部枚举

外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员在编译后计算出常量作为枚举值。

对于非常数的外部枚举而言，需要在运行时计算。

### 常量枚举

``` ts
const enum Enum {
    A
}
```

- 不允许包含计算成员，避免额外的非直接的对枚举成员的访问
- 生成的代码常量枚举成员在使用的地方会被内联进来，因此可以避免额外的生成代码开销


## 泛型

为代码复用服务

添加类型变量`T`，`T`帮助我们捕获用户传入的类型。

### 泛型函数

``` ts
function myFunc1<T>(x: T): T {
    return x;
}

let myFunc2 = function<T>(x: T): T {
    return x;
}

let myFunc4: <T>(x: T) => T = (x) => x;
```

### 泛型接口

``` ts
interface IMyFunc {
    <T>(x: T) => T
}

let myFunc: IMyFunc = (x) => x;
```

``` ts
interface IMyFunc<T> {
    (x: T) => T
}
let myFunc: IMyFunc<number> = (x) => x;
```

### 泛型类

``` ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
```

### 泛型约束

``` ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
```

**依赖`keyof`**

``` ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");
```

**工厂函数依赖类类型**

``` ts
function create<T>(c: {new (): T}): T {
    return new c();
}
```