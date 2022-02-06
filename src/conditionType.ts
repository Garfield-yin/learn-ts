// T extends U ? X:Y

type TypeName<T> = T extends string
	? "string"
	: T extends number
	? "number"
	: T extends boolean
	? "boolean"
	: T extends undefined
	? "undefined"
	: T extends Function
	? "function"
	: "object";

type T1 = TypeName<string>;
type T2 = TypeName<"">;

// (A | B) extends U ? X:Y
// (A extends U ? X:Y) | (B extends U ? X:Y)

type T3 = TypeName<string | string[]>;

type Diff<T, U> = T extends U ? never : T;

type t4 = Diff<"a" | "b" | "c", "a" | "e">;

// Exclude<T,U> ， 从 T中过滤掉可以给U 的

// NotNullable<T>

// Extract<T,U>，从T中抽取可以 给 U的
type T6 = Extract<"a" | "b" | "c", "a" | "e">;

// ReturnType
// inter 待推断
type T7 = ReturnType<() => string>;
