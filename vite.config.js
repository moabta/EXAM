import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // حل مشكلة استيراد الخطوط
      '@fontsource': path.resolve(__dirname, 'node_modules/@fontsource')
    }
  },
  base: "/exam/", // 🔹 أضف هذا لضبط المسار في GitHub Pages
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
  build: {
    outDir: 'dist', // تحديد مجلد الإخراج
    assetsDir: 'assets', // وضع الملفات الثابتة داخل مجلد 'assets'
  },
  server: {
    fs: {
      allow: ['..', 'node_modules']
    }
  }
});
