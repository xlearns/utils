import { expect, it } from "vitest";
import { toArray, mergeArrayable } from "../src";

it("toArray", () => {
	expect(toArray(1)).toEqual([1]);
	expect(toArray([1])).toEqual([1]);
	expect(toArray({ name: 1 })).toEqual([{ name: 1 }]);

	expect(toArray(1)).toMatchInlineSnapshot(`
		[
		  1,
		]
	`);
});

it("mergeArrayable", () => {
	const a = [1, 3, 4];
	const b = [3, 5, 11, 2];
	const c = [3, [33, [333, 111]]];
	expect(mergeArrayable(1, a, b, c)).toMatchInlineSnapshot(`
		[
		  1,
		  1,
		  3,
		  4,
		  3,
		  5,
		  11,
		  2,
		  3,
		  [
		    33,
		    [
		      333,
		      111,
		    ],
		  ],
		]
	`);
});
