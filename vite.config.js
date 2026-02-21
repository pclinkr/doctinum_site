import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async () => {
  const plugins = [react()];
  let useSingleFile = false;

  try {
    const singleFileModule = await import('vite-plugin-singlefile');
    plugins.push(singleFileModule.viteSingleFile());
    useSingleFile = true;
  } catch {
    // Optional dependency: regular build still works without it.
  }

  return {
    base: './',
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(projectRoot, './src')
      }
    },
    build: {
      cssCodeSplit: !useSingleFile
    }
  };
});
