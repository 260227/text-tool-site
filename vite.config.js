import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 打包优化：减小体积，加快加载速度
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 打包移除 console
      },
    },
    chunkSizeWarningLimit: 1000,
  }
})