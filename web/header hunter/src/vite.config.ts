import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to Express server during development
      '/secret-path': 'http://localhost:3000',
      '/not-here': 'http://localhost:3000',
      '/try-again': 'http://localhost:3000',
      '/keep-looking': 'http://localhost:3000',
      '/almost-there': 'http://localhost:3000',
      '/getting-warmer': 'http://localhost:3000',
      '/cold-as-ice': 'http://localhost:3000'
    }
  }
});