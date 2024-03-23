import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'], // Entry point for TypeScript code
	format: ['cjs', 'esm'], // Output formats: CommonJS and ES modules
	dts: true, // Generate TypeScript declaration files (.d.ts)
	splitting: false, // Disable code splitting
	sourcemap: true, // Generate source maps
	clean: true, // Clean output directory before building
});
