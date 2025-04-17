import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
};
