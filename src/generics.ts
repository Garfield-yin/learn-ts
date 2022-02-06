// 可理解为函数参数，但这个参数只是类型
// function log<T>(value: T): T {
// 	console.log(value);
// 	return value;
// }

//log<string[]>(["a", "b"]);
//log(["a"]);

// type Log = <T>(value: T) => T;
// let myLog: Log = log;
/*
interface Log<T> {
	(value: T): T;
}

let myLog: Log<number> = log;
log(1);
*/
//泛型类

// 泛型不能用于类的静态成员
class Log<T> {
	run(value: T) {
		console.log(value);
		return value;
	}
}

let log1: Log<number>;

//log1.run(1);

let log2 = new Log();
log2.run({});

interface Length {
	length: number;
}
function log<T extends Length>(value: T): T {
	console.log(value, value.length);
	return value;
}
log("abc");

//泛型的好处
// 1. 函数和类可以轻松支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载， 冗长的联合类型声明，增加代码可读性
// 3. 灵活控制类型之间的约束
