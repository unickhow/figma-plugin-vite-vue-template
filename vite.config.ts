import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    UnoCSS()
  ],
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
