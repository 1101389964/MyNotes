const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //对css文件进行单独的打包，不合并进js文件中
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //压缩打包后的csss文件
const TerserPlugin = require('terser-webpack-plugin') //webpack5已经自带了terser，只需要引入即可
const webpack = require('webpack')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin') //对css进行treeshake
const CompressionPlugin = require('compression-webpack-plugin') //对打包后的代码进行某种格式的压缩

module.exports = {
  // watch: true,
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].index.js',
    path: path.resolve(__dirname, './build')
  },
  optimization: {
    usedExports: true, // 会使用魔法注释标记导出的模块中哪些未被使用
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 使用多进程并发运行以提高构建速度,为true时并发运行的默认数量:os.cpus().length-1，cpu多核数量减一
        extractComments: false, //是否将注释剥离到单独的文件中,开启为true。
        terserOptions: {
          //terser的配置项
          compress: {
            defaults: true
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json', 'vue', 'ts']
  },
  //externals为不需要打包的库
  externals: {
    lodash: '-', //lodash是不需要打包库的名称，'-'是lodash是该库暴露出的全局对象
    dayjs: 'dayjs'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        //原来这里的styled-loader换成了MiniCssExtractPlugin.loader
        sideEffects: true
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'CDN',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css' //前面css代表文件夹，后面的为构建css的文件名
    }),
    new CssMinimizerPlugin(), //压缩打包后的css文件
    new webpack.optimize.ModuleConcatenationPlugin(), //对打包后得js文件，模块化合并，同一个作用域下的模块进行合并
    new PurgecssPlugin({
      //通过glob.sync匹配src下的所有文件夹的所有文件
      paths: glob.sync(`${path.resolve(__dirname, './src')}/**/*`, {
        nodir: true //nodir表面匹配的是文件
      }), //哪些目录下的文件需要被treeShaking
      safelist: function () {
        //表示一下标签名或者类名或者id是安全的不需要treeShaking
        return {
          standard: ['body', 'html']
        }
      }
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/, //匹配哪些文件需要压缩
      //threshould: 500, // 设置文件从多大开始压缩
      minRatio: 0.9, //至少要达到的压缩比例才给压缩，压缩比例=(压缩后的文件)/(压缩前的文件)
      algorithm: 'gzip' //采用的压缩算法
    })
  ]
}
