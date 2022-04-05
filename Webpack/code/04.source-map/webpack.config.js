const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //cleanWebpackPlugin源码中是向export添加属性的方式添加cleanWebpackPlugin并导出的,所以需要解构
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //默认属性为production
  entry: "./src/main.js",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack案列",
    }),
  ],
};
