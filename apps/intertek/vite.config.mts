/// <reference types='vitest' />
import { cp, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import reactScanComponentName from 'react-scan/react-component-name/vite';
export default defineConfig(({ command }) => ({
  base: process.env.BASE_PATH || '/',
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/intertek',
  server: {
    port: 4700,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    react(),
    tailwindcss(),
    ...(command === 'serve' ? [reactScanComponentName()] : []),
    {
      name: 'copy-hidden-public-assets',
      async closeBundle() {
        const publicDir = resolve(import.meta.dirname, 'public');
        const outDir = resolve(import.meta.dirname, 'dist');

        for (const entry of await readdir(publicDir, { withFileTypes: true })) {
          if (!entry.name.startsWith('.')) continue;
          await cp(resolve(publicDir, entry.name), resolve(outDir, entry.name), {
            recursive: true,
          });
        }
      },
    },
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: '@intertek-ws/intertek',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
