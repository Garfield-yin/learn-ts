// 数字枚举
enum Role {
	Reporter,
	Developer,
	Maintainer,
	Owner,
	Guest,
}

// 字符串枚举
enum Message {
	Success = "success",
	Fail = "Fail",
}

// 异构枚举
enum Answer {
	N,
	Y = "yes",
}

// 枚举成员
enum Char {
	a,
	b = Char.a,
	c = 1 + 3,
	d = Math.random(),
}

// 常量枚举,编译阶段被移除，枚举直接替换为常量
const enum constEum {
	Jan,
	Feb,
}
