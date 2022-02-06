interface Item {
	readonly id: number;
	name: string;
	[x: string]: any;
}

interface Result {
	data: Item[];
}

const render = (result: Result) => {
	for (const val of result.data) {
		console.log(val.id, val.name);
	}
};

const result = {
	data: [
		{
			id: 2,
			name: "A",
		},
		{ id: 3, name: "B" },
	],
};
//as  类型断言
render(result);

// 字符串类型数组
interface StringArray {
	[index: number]: string;
}

let chars: StringArray = ["A"];

interface Names {
	[x: string]: string;
	[z: number]: string;
}

let add: (x: number, y: number) => number;
/*
interface Add {
	(x: number, y: number): number;
}
*/
type Add = (x: number, y: number) => number;

interface Lib {
	(): void;
	version: string;
	doSomething(): void;
}

function getLib() {
	let lib: Lib = (() => {}) as Lib;
	lib.version = "v1.1";
	lib.doSomething = () => {};
	return lib;
}
