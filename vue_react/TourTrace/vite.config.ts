import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 预先加载ui 组件
import Components from 'unplugin-vue-components/vite'
// 引入vant 自动引入组件
import { VantResolver} from '@vant/auto-import-resolver'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver()
      ]
    })
  ],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src')
    }
  }
})