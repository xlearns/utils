import { expect, describe, test } from "vitest";
import { mergeObject } from "../src";

describe("dom.ts", () => {
	test("mergeObject object", () => {
		const value1 = { t: { name: 1, age: 2 } };
		const value2 = { t: { name: 2 }, h: 123 };
		const target = { t: { name: 2, age: 2 }, h: 123 };
		expect(mergeObject({}, value1, value2)).toEqual(target);
	});

	test("mergeObject array", () => {
		// Array.from(new Set([...value1,...value2]))
		const value1 = [1, 2, 3];
		const value2 = [2, 3, 4];
		const target = [1, 2, 3, 4];
		// expect(mergeObject({}, value1, value2)).toEqual(target);
		console.log(mergeObject({}, value1, value2));
	});

	test("mergeObject hybrid", () => {
		// const value1 = { t: { tt: { ttt: [1, 2], name: 1 }, age: 2 } };
		// const value2 = { t: { tt: { ttt: [2, 3, 4], name: 2 } }, h: 123 };
		// const target = {
		// 	t: { tt: { ttt: [1, 2, 3, 4], name: 2 }, age: 2 },
		// 	h: 123,
		// };
		// expect(mergeObject({}, value1, value2)).toEqual(target);
	});
});
