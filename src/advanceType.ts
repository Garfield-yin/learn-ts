interface DogInterface {
	run(): void;
}

interface CatInterface {
	jump(): void;
}

// 交叉类型，类型并集
let pet: DogInterface & CatInterface = {
	run() {},
	jump() {},
};

class Dog implements DogInterface {
	run(): void {
		throw new Error("Method not implemented.");
	}
	eat() {}
}

class Cat implements CatInterface {
	jump(): void {
		throw new Error("Method not implemented.");
	}
	eat() {}
}

// 联合类型
let a: number | string = "a";
let b: "a" | "b" | "c" = "a";

enum Master {
	Boy,
	Girl,
}

function getPet(master: Master) {
	let pet = master === Master.Boy ? new Dog() : new Cat();
	//访问共有成员
	pet.eat();
	return pet;
}

interface Square {
	Kind: "square";
	size: number;
}

interface Rectangle {
	Kind: "rectangle";
	width: number;
	height: number;
}

interface Circle {
	Kind: "circle";
	r: number;
}
type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
	switch (s.Kind) {
		case "square":
			return s.size * s.size;
		case "rectangle":
			return s.height * s.width;
		case "circle":
			return Math.PI * s.r ** 2;
		default:
			return ((e: never) => {
				throw new Error(e);
			})(s);
	}
}
