import { defineConfig } from "vitest/config";

export default defineConfig({
	root: ".",
	test: {
		coverage: {
			provider: "v8",
			exclude: ["src/index.ts"],
		},
		setupFiles: ["dotenv/config"],
	},
});
