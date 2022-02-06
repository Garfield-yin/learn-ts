//接口只能约束公有成员;
interface Human {
	name: string;
	eat(): void;
}

// 类实现接口
class Asian implements Human {
	constructor(name: string) {
		this.name = name;
	}
	name: string;
	eat(): void {
		throw new Error("Method not implemented.");
	}
	sleep() {}
}

interface Man extends Human {
	run(): void;
}

interface Child {
	cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
	name: "",
	run() {},
	eat() {},
	cry() {},
};

// 接口继承类，相当于继承类的结构，没有实现
class Auto {
	state = 1;
	//private state2 = 0;
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
	state = 1;
}

class Bus extends Auto implements AutoInterface {}
