import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Remove the exclusion of lucide-react to fix Firefox compatibility
  optimizeDeps: {
    // We're no longer excluding lucide-react
  },
});
