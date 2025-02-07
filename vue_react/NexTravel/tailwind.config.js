/**jsDoc 注释，类型为config @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      // ** 递归匹配任意深度子目录，*.js 匹配以js结尾的文件名
      "./src/**/*.{js,ts,vue,jsx,tsx}",
    ],
    theme: {
      extend: {},// 允许修改或增加自定义主题
    },
    plugins: [],
  }
  