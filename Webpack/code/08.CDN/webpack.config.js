const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "[name].index.js",
    path: path.resolve(__dirname, "./build"),
  },
  optimization: {
    splitChunks: {
      //async处理异步的导入
      //inital对同步的导入进行处理
      chunks: "all", //不管异步导入还是同步导入都会抽取公共的依赖为单独的配置文件。
    },
  },
  resolve: {
    extensions: [".js", ".jsx", "json", "vue", "ts"],
  },
  //externals为不需要打包的库
  externals: {
    lodash: "-", //lodash是不需要打包库的名称，'-'是lodash是该库暴露出的全局对象
    dayjs: "dayjs",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "CDN",
      template: "./index.html",
    }),
  ],
};
