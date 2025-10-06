import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy']
        }
      }
    }),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html' 
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    },
  }
})
