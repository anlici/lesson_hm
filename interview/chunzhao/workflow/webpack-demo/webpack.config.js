// node 脚本
// webpack-dev-server 默认读取 webpack.config.js 配置文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 打包入口文件
  output: { // 输出
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    // 相应后缀的文件去处理编译
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { // 匹配什么后缀
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 1234,
    compress: true,
    static: {
      directory: path.join(__dirname, 'public')
    }
  }
}