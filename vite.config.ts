import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio-V2/',
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './public/images'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
