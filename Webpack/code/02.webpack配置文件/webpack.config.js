const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //cleanWebpackPlugin源码中是向export添加属性的方式添加cleanWebpackPlugin并导出的,所以需要解构
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js", //打包的入口文件
  output: {
    //注意path必须为绝路径
    path: path.resolve(__dirname, "./build"), //打包后的出口文件夹，
    filename: "js/bundle.js", //打包后的文件名
  },
  module: {
    rules: [
      {
        //配置文件，当对应的文件匹配上，就可以使用对应的loader，使用正则表达式进行匹配
        test: /\.css$/,
        use: [
          //注意：webpack在加载loader时，是从use的数组中，从后往前加载的，应该先解析css在加载css，所以css-loader在后，style-loader在前
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1, //因为css-loader前只有一个loader，所以importLoaders值为1.
            },
          },
          {
            loader: "postcss-loader",
          },
          // "css-loader" // loader:"css-loader"的简写，不需要以对象的格式,当没options选项是可以直接以字符串的形式填写。
        ],
        // loader: "css-loader",//当一个只有一个loader时，可以省去use数组,直接写loader对应的loader
      },
      {
        test: /\.less$/,
        //先使用less-loader将less转化为css，再用css-loader解析css-loader，最后用style-loader进行加载
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //因为css-loader前有2个loader，所以importLoaders值为2。less-loader不负责只负责转化为css不负责解析。
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          /* {
            loader: "file-loader",
            options: {
              name: "./img/[name].[hash:6].[ext]",
            },
          }, */
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[hash:6].[ext]",
              limit: 100 * 1024, //限制生成base64文件大小在100kb以下
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), //cleanWebpackPlugin是一个类，该plugins的作用是每次打包文件时，会先自动清理build文件夹里面的文件
    new HtmlWebpackPlugin({
      title: "webpack案列", //在HtmlWebpackPlugin模板中<title></title>中为一个待输入的变量，传入title即可。
      template: "./src/public/index.html", //自定义模板html文件
    }),
    new DefinePlugin({
      BASE_URL: '"./"', //读取到的BASE_URL为字符串内的，得再在外面套一层''，否则BASE_URL就会为./;
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/public",
          globOptions: {
            ignore: ["**/.DS_Store", "**/index.html"], //当需要忽略某个文件时前面应该需要添加**/
          },
        },
      ],
    }),
  ],
};
