import { defineConfig } from 'vitest/config';

export default defineConfig({
	root: '.',
	test: {
		coverage: {
			provider: 'v8',
		},
		setupFiles: ['dotenv/config'],
	},
});
