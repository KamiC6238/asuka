import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  server: {
    proxy: {
      '/file': 'http://localhost:3000/'
    }
  },
  optimizeDeps: {
    // 解决请求 ts-worker 504 Outdated Optimize Dep 的问题
    // TODO: 这里需要去详细看下问题的原因以及是怎么解决的
    exclude: ['tiny-monaco']
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
