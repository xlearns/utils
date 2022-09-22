import { expect, describe, test } from "vitest";
import { toArray, mergeArrayable } from "../src";

describe("array.ts", () => {
	test("toArray", () => {
		expect(toArray(1)).toEqual([1]);
		expect(toArray([1])).toEqual([1]);
		expect(toArray({ name: 1 })).toEqual([{ name: 1 }]);
	});

	test("mergeArrayable", () => {
		const a = [1, 3, 4];
		const b = [3, 5, 11, 2];
		const c = [3, [33, [333, 111]]];
		// console.log(mergeArrayable(1, a, b, c));
		expect(mergeArrayable(1, a, b, c)).toEqual([
			1,
			1,
			3,
			4,
			3,
			5,
			11,
			2,
			3,
			[33, [333, 111]],
		]);
	});
});
