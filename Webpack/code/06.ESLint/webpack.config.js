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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_moudles/, //不会对该文件夹下面的代码进行loader
        use: {
          loader: "babel-loader",
          // loader: "eslint-loader",
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_moudles/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack案列",
    }),
  ],
};
