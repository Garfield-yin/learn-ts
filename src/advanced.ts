// 类型推断
// 1.从右向左
// 2.从左向右
// 3. 类型断言

//
interface Foo {
	bar: number;
}
let foo = {} as Foo;

foo.bar = 1;

// 类型兼容
/**
 * X 兼容 Y,增加灵活性
 */

let s: string = "a";
s = null;

// 接口兼容性
interface X {
	a: any;
	b: any;
}

interface Y {
	a: any;
	b: any;
	c: any;
}

let x1: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };
x1 = y;
//y = x1;

// 函数兼容性

type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
	return handler;
}

let handler1 = (a: number) => {};
hof(handler1);

let handler2 = (a: number, b: number, c: number) => {};
//hof(handler2);

interface Point3D {
	x: number;
	y: number;
	z: number;
}

interface Point2D {
	x: number;
	y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d;

// 返回值类型
let f = () => ({ name: "Alice" });
let g = () => ({});

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// class 类型兼容
class A {
	constructor(p: number, q: number) {}
	id: number = 1;
	private name: string = "";
}

class B {
	static s = 1;
	constructor(p: number) {}
	id: number = 2;
	private name: string = "";
}
// 构造函数和静态成员不作为比较
// 含有私有成员，不兼容
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb;
// bb = aa;

// 父类和子类互相兼容
class CC extends A {}
let c: CC = new CC(1, 2);
aa = c;
c = aa;

// 泛型类型兼容
interface Empty<T> {
	value: T;
}
/*
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2;
obj2 = obj1;
*/

let log11 = <T>(x: T): T => {
	return x;
};

let log12 = <U>(y: U): U => {
	return y;
};

log11 = log12;

// 增加了灵活性

// 类型保护,区块中形成
//1. instaceof
// 2.in
//if('ts' in lang)

// 3. typeof

// 4. 类型保护函数
// 类型谓词
/*
function isJava(lang: Java | JavaScript): lang is Java {
	(lang as Java)
}
*/
