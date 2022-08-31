import { expect, it } from "vitest";
import { toArray } from "../src";

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
