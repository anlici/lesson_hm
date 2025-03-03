import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'
// console.log(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createStyleImportPlugin({
    libs: [
      {
        libraryName: 'zarm',
        esModule: true,
        resolveStyle: name => `zarm/es/${name}/style/css`
      }
    ]
  })],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    }
  },
  resolve: {
    alias: {
      // 项目的物理路径
      '@': path.resolve(__dirname, './src'),
      
    }
  },
  server: {
    // 代理 解决跨域
    proxy: {
      '/api': {
        // 代理地址,所有 /api 开头都转发到这个地址
        target: 'http://localhost:7001/',
        changeOrigin: true, // 修改请求的 host 头为目标服务器的域名
        // 重写路径， 表示去掉请求路径中的 /api 前缀，以便正确匹配目标服务器的路由
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/upload': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, '/upload')
      }
    }
  }
})