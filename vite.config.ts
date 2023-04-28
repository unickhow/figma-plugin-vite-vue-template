import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: 'index.html',
        code: 'figma/code.ts'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
