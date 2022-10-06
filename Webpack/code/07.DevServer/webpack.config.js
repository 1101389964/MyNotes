const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = env => {
  console.log('env = ', env)
  return {
    watch: true,
    mode: 'development',
    //配置两个入口文件
    entry: {
      mian: './src/main.js',
      index: './src/index.js'
    },
    //打包的文件名前面添加[name]，[name]会自动配对入口文件，分别打包成对应的文件
    output: {
      filename: '[name].index.js',
      path: path.resolve(__dirname, './build')
    },
    optimization: {
      splitChunks: {
        //async处理异步的导入
        //inital对同步的导入进行处理
        chunks: 'all' //不管异步导入还是同步导入都会抽取公共的依赖为单独的配置文件。
      }
    },
    devServer: {
      hot: true,
      // hotOnly: true,
      // host: "0.0.0.0",
      port: 8000,
      open: true,
      compress: true, // 打包后的文件进行压缩
      historyApiFallback: true // 在刷新时，返回404错误时，会自动返回 index.html 的内容
    },
    resolve: {
      extensions: ['.js', '.jsx', 'json', 'vue', 'ts']
      /* alias: {
      Utilities: path.resolve(__dirname, "src/utilities/"),
      Templates: path.resolve(__dirname, "src/templates/"),
    }, */
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'hmr',
        template: './index.html'
      }),
      new ReactRefreshWebpackPlugin()
    ]
  }
}
