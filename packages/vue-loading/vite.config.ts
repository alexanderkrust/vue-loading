import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    cssTarget: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-loading',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    css: {
      include: /__tests+/,
    },
  },
})
