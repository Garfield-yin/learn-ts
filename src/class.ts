import { CallTracker } from "assert";

// 抽象类： 只能被继承，不能被实现
abstract class Animal {
	constructor() {}
	eat() {}
	// 明确子类可以有其他实现
	abstract sleep(): void;
}

class Dog extends Animal {
	constructor(name: string) {
		super();
		this.name = name;
	}
	name: string;
	run() {}
	// 私有成员，类内部使用，不能被实例化或继承
	private pri() {}
	// 可以子类中调用
	protected pro() {}
	// 必须被初始化
	readonly legs: number = 4;
	// 只能通过类名调用
	static food: string = "stone";

	sleep(): void {
		console.log("Dog sleep");
	}
}

let dog: Dog = new Dog("wangcai");
dog.eat();

class Husky extends Dog {
	// public color 自动变成实例属性
	constructor(name: string, public color: string) {
		super(name);
		this.color = color;
	}
	//public color: string;
}

class Cat extends Animal {
	sleep(): void {
		console.log("Cat sleep");
	}
}

let cat: Cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach((ele) => {
	//console.log(ele.sleep());
});

// 实现方法的链式调用
class WorkFlow {
	step1() {
		console.log("WorkFlow.step1:", this);
		return this;
	}

	step2() {
		console.log("WorkFlow.step2:", this);
		return this;
	}
}
new WorkFlow().step1().step2();
class MyFlow extends WorkFlow {
	next() {
		console.log("MyFlow.next:", this);
		return this;
	}
}

new MyFlow().next().step1().step2();
