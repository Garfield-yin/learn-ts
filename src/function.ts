const add1 = (x: number, y?: number) => {
	return y ? x + y : x;
};

const add2 = (x: number, y = 0, z: number, q = 1) => {
	return x + y + z + q;
};

const add3 = (x: number, ...rest: number[]) => {};

// 重载，相同功能，不需要重新定义名称
function add4(...rest: number[]): number;
function add4(...rest: string[]): string;
function add4(...rest: any[]): any {
	let first = rest[0];
	if (typeof first === "string") {
		return rest.join();
	}
	if (typeof first === "number") {
		return rest.reduce((pre, cur) => {
			return pre + cur;
		});
	}
}

console.log(add4(1, 2, 3));
console.log(add4("a", "b"));
