interface ObjM {
	a: string;
	b: number;
	c: boolean;
}
// Readonly
type ReadonlyObj = Readonly<ObjM>;

// Partial, 可选
type PartialObj = Partial<ObjM>;

//Pick
type PickObj = Pick<Obj, "a" | "b">;

// Record
type RecordObj = Record<"x" | "y", ObjM>;

let recordObj: RecordObj = {
	x: { a: "a", b: 2, c: true },
	y: { a: "a", b: 2, c: true },
};
