import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Create an alias for the node_modules directory to make font imports work correctly
      '@fontsource': path.resolve(__dirname, 'node_modules/@fontsource')
    }
  },
  // Configure static asset handling
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
  // Ensure proper serving of static files
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', 'node_modules']
    }
  }
});