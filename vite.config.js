import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'src/index.html'),
        tools: resolve(import.meta.dirname, 'src/tools.html'),
      },
    },
  },
  plugins: [
    tailwindcss()
  ]
})
