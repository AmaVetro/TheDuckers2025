import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Desactivamos Fast Refresh en test para evitar el error de "preamble"
    react({
      fastRefresh: process.env.VITEST ? false : true,
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },
})
