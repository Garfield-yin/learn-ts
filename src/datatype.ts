// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
// 泛型接口
let arr2: Array<number | string> = [1, 2, 3, "abc"];

// 元组
let tuple: [number, string] = [0, "abc"];

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };

// symbl: 具有唯一值
let s1: symbol = Symbol();
let s2 = Symbol();

// undefined, null
let un: undefined = undefined;
let nul: null = null;

//void
let notReturn = () => {};

// any，作用：对 js 兼容
let x;

// never, 永远不会有返回值
let error = () => {
	throw new Error("err");
};
