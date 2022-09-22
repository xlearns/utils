import { expect, describe, test } from "vitest";
import { getCssVariable } from "../src";

describe("dom.ts", () => {
	test("getCssVariable", () => {
		let dom = document.createElement("div");
		dom.style.color = "red";
		expect(getCssVariable(dom, "color")).toBe("red");
	});
});
