import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	test: {
		environment: "jsdom",
		include: ["test/**/*.test.ts"],
	},
});
