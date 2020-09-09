---
title: TypeScript使用文档
permalink: /f2e/typescript/handbook
---

# TypeScript使用文档

TypeScript官方文档要点提炼。

## TypeScript的立意

JavaScript是一门弱类型、动态语言。

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


::: tip strictNullChecks
在未设置`strictNullChecks`的编译环境中，`undefined/null`是所有类型的子类。
在设置`strictNullChecks`的编译环境中，`null`只能赋值给`any/unknown`类型的变量，`undefined`只能赋值给`any/unknown/void`
:::

### Never

永远不会有值。譬如下列函数的返回值：
- 内部抛出异常的函数
- 内部无限循环的函数


### 类型断言

人为强制类型转换

``` ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // 使用JSX时，只能使用as语句
```

## 接口

接口：创建一个复杂类型。

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

返回值必须声明，如果函数无返回值，需要声明为`void`。

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

## 类型保护

类型保护是一个表达式，以确保在运行时，该类型的属性、方法可被使用。有几种方式可以实现类型保护：

**自定义的类型保护——类型谓语（type predicate）**
定义一个函数，函数的返回类型是一个类型谓语(`parameterName is Type`)

``` ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// 在if...else语句里，不仅知道if接受的是Fish类型的变量，同时知道else接受的是Bird类型的变量
```

**使用`in`操作符**

确认属性或方法可用

``` ts
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}
```

**typeof 操作符**

TypeScript会把`typeof`视为一种类型保护

但是Typescript只会识别`typeof v === "typename"`和`typeof v !== "typename"`格式，同时，`"typename"`只支持`"number"`、`"string"`、`"boolean"`、`"symbol"`。其他的判断不会被视为类型保护。


**instanceof 操作符**

``` ts
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder;
}
if (padder instanceof StringPadder) {
  padder;
}
```

**处理联合Nullable的类型**

直接判断
``` ts
function f(stringOrNull: string | null): string {
  if (stringOrNull === null) {
    return "default";
  } else {
    return stringOrNull;
  }
}
```

terser operators
``` ts
function f(stringOrNull: string | null): string {
  return stringOrNull ?? "default";
}
```

类型断言操作符：添加!后缀，去除`null`和`undefined`的情况
``` ts
user!.email!.length;
```



## 类型别名

``` ts
type Animal = {
  name: string
}
```

类型别名不创建类型，只是创建一个名字，由这个名字引用类型

**类型别名和接口的区别**

- 类型别名不创建类型，只是创建一个名字引用类型； -> 类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）
- 类型别名可表示联合类型或元组类型 -> 接口无法表示的类型可由类型别名表示


## 索引类型

``` ts
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]

```
`keyof`，索引类型查询操作符，`keyof T`，返回T中已知公共的属性联合类型。

 `T[K]`，索引访问操作符，代表person['name']对应的类型是Person['name']。


 ## 映射类型

 从旧类型中创建新类型。这是一个生成类型的语法，而不是定义类型中的某个成员。内部依赖`for...in`来实现。

 ``` ts
 type PartialWithNewMember<T> = {
  [P in keyof T]?: T[P];
} & { newMember: boolean }
 ```

基于类型映射实现的内部应用类型

``` ts
type Partial<Type> = {
    [P in keyof Type]?: Type[P]
}

type ReadOnly<Type> = {
    readonly [P in keyof Type]: Type[P]
}

type Record<Keys extends keyof any, Type> = {
    [P in Keys]: Type
}

type Pick<Type, Keys extends keyof Type> = {
    [P in Keys]: Type[P]
}
```

## 内置类型

``` ts
// Omit<Type, Keys> 从Type中移除Keys对应的属性
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Exclude<Type, ExcludedUnion> 移除Union
type T0 = Exclude<"a" | "b" | "c", "a" | "b">;
//    ^ = type T0 = "b" | "c"

// Extract<Type, Union> 选择交集
type T1 = Extract<string | number | (() => void), Function>;
//    ^ = type T1 = () => void

// NonNullable<Type> 移除nullable的部分
type T0 = NonNullable<string | number | undefined>;
//    ^ = type T0 = string | number

// Parameters<Type> 将函数参数类型提取一个Tuple
type T0 = Parameters<() => string>;
//    ^ = type T0 = []
type T1 = Parameters<(s: string) => void>;
//    ^ = type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
//    ^ = type T2 = [arg: unknown]


// ConstructorParameters<Type> 从constructor提取一个Tuple
type T0 = ConstructorParameters<ErrorConstructor>;
//    ^ = type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;
//    ^ = type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;
//    ^ = type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;
//    ^ = type T3 = unknown[]

// ReturnType<Type> 提取函数返回值的类型
declare function f1(): { a: number; b: string };
type T0 = ReturnType<() => string>;
//    ^ = type T0 = string
type T1 = ReturnType<(s: string) => void>;
//    ^ = type T1 = void
type T2 = ReturnType<<T>() => T>;
//    ^ = type T2 = unknown
type T4 = ReturnType<typeof f1>;    // 函数的类型
//    ^ = type T4 = {
//    a: number;
//    b: string;
//}


// InstanceType<Type> 创建一个由constructor中实例类型组成的类型
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
//    ^ = type T0 = C


```

## 装饰器

装饰器是ES6处于stage2阶段提案，TypeScript对实验性特性提供了支持。使用装饰器需要在`tsconfig.js`中做如下配置

``` js
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

装饰器使用`@expression`形式，在运行时，执行expression函数，对类的构造函数、方法、属性、访问器、参数做附加的操作。

装饰器必须紧靠着作用对象的声明。因此不能用在声明文件或外部上下文中。

**类装饰器**

应用在类的构造函数上。


``` ts
// 类装饰器得到的参数是类的构造函数
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
```


**方法装饰器**

应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

``` ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}


function enumerable(value: boolean) {
    // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    // propertyKey: 属性名
    // descriptor: 属性描述符
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
```

**访问器装饰器**

访问器装饰器应用于访问器的 属性描述符并且可以用来监视，修改或替换一个访问器的定义。

``` ts
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```

**属性装饰器**


``` ts
import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
```


**参数装饰器**

``` ts
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
}


function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    // propertyKey: 属性名
    // parameterIndex: 参数索引
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
```


## 声明合并

TypeScript声明会创建三种类型的实体：namespace/type/value

|   Declaration Type   |   Namespace   |  Type  | Value |
| ---- | ---- | ---- | ---- |
|   Namespace   |   X   |      |   X   |
|   Class   |      |   X   |   X  |
|   Enum   |      |   X   |   X   |
|   Interface |     |   X   |       |
|   Type Alias  |       |   X   |       |
|   Function    |       |       |   X   |
|   Variable    |       |       |   X   |

“声明合并”是指编译器将针对同一个名字的两个独立声明合并为单一声明。

**合并接口**

``` ts
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};
```

接口中的非函数成员需要是同类型的，不然会出现类型冲突错误。

对于函数成员，每个同名函数声明都会被当成这个函数的一个重载


**命名空间合并**

只会合并导出成员

``` ts
namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}
```


**命名空间和类、函数、枚举类型合并**

内部类模式

``` ts
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}
```

函数扩展属性

``` ts
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));
```

扩展枚举型

``` ts
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}
```


## Mixins

将类组合到一起

- 声明辅助类作为mixins，主类`implements`辅助类。
- 主类中简单定义辅助类中的属性和方法，作为占位
- 使用`applyMixins`把mixins混入主类

``` js
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}

```


## 模块

TypeScript的类型声明同样支持模块的概念，支持ES Module和AMD的模块化规范，但不能混合使用。

为了支持CommonJS和AMD的exports, TypeScript提供了export =语法。

export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。

若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。

模块是一个独立的作用域，因此不需要和命名空间一起使用。模块中的任何类型声明都能够通过`export`关键字导出

`.d.ts`文件用来定义声明类型的API

在声明外部模块时，我们可以使用顶级的 export声明来为每个模块都定义一个.d.ts文件，但最好还是写在一个大的.d.ts文件里。使用`declare module X`包裹，模块中的类型声明API通过`export`导出。
``` ts
// node.d.ts

declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}
```

``` ts
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```

假如你不想在使用一个新模块之前花时间去编写声明，你可以采用声明的简写形式以便能够快速使用它，所有的导出类型都会是any
``` ts
declare module "hot-new-module";
```


### 模块解析

编译器定位模块声明文件有两种策略：Classic和Node

**Classic策略**
这种策略在以前是TypeScript默认的解析策略。 现在，它存在的理由主要是为了向后兼容。
- 对于相对定位的模块：根据路径先查找模块文件，再查找`.d.ts`模块声明文件
- 对于绝对定位的模块：从当前路径依次向上级查找模块文件，再查找`.d.ts`模块声明文件


**Node策略**

试图在运行时模仿Node.js模块解析机制

Node.js的策略：
- 相对定位的模块
    1. 检查模块对应的js文件是否存在（`/root/src/moduleB.js`）
    2. 检查`/root/src/moduleB`目录下是否包含一个`package.json`文件，且`package.json`文件指定了一个`main`模块。引用这个main模块
    3. 检查`/root/src/moduleB/index.js`是否存在
- 绝对定位的模块：沿当前目录向上查找`node_modules`，在`node_modules`里的查找方式和相对定位模块相同

TypeScript的Node策略：在Node.js的查找策略上加上`.ts，.tsx和.d.ts`后缀名支持。在`package.json`文件中根据`types`字段确定模块。


## 命名空间

命名空间的存在是为了避免命名冲突

命名空间中可供外部调用的声明需要export

命名空间被拆分到多文件，仍属于一个命名空间，使用引用标签表示命名空间之间的引用关系。