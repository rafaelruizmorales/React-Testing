/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8', // Use v8 for coverage
      reporter: ['text', 'json', 'html'], // Outputs coverage in multiple formats
      exclude: [
        'src/test/**',         // Ignore test utilities
        'src/mocks/**',        // Ignore mock files
        'src/store/**',        // Ignore Redux store
        'src/main.tsx',        // Ignore main entry point
        'src/components/**/model.tsx', // Ignore model files
        'src/vite-env.d.ts',   // Ignore TypeScript environment types
        'src/setupTests.ts',   // Ignore Jest/Vitest setup file
        'src/utils/logger.ts', // Ignore a specific utility file
        './eslint.config.js',  // Ignore ESLint config
        './vite.config.ts',    // Ignore Vite config
      ],
    },
  },
});
