const path = require("path"); //路径插件
const VueLoaderPlugin = require("vue-loader/lib/plugin"); //vue的插件
const HtmlWebpackPlugin = require("html-webpack-plugin"); //可以打包html的插件
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin"); //压缩bundle.js的插件
/* 最后一个文件没有.缀的形式可能是文件夹也可能是文件名。
  如果plugin是文件夹的话，默认找到里面的js文件执行，找不到则报错
  如果是文件的话，就找当前目录的js文件
  优先级：如果存在相同的两个文件名，列入存在plugin文件夹与plugin.js文件，那么默认找plugin.js文件 
  */

module.exports = {
  mode: "development",
  entry: "./src/main.js", //默认打包的入口
  output: {
    path: path.resolve(__dirname, "./dist"), //打包的文件名
    /* 
        动态的获取绝对路径 ,path是node一个对象，代码第一行引入了path,resolve是对象的方法
        可以自动获取当前文件所在位置，然后拼接./dist路径；
    */ filename:
      "bundle.js",
    //publicPath: "dist/", 只要涉及到url/src的文件自动拼接dist/，否则url文件在dist文件夹里面会找不到。
  },
  resolve: {
    //alias：别名
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".js", ".css", ".vue"], //如果添加了这些后缀名，那么在依赖文件里面可以不需要写最后的后缀
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html", //找当前目录所在文件下面的index.html文件，以次为模板
    }),
    // new UglifyjsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM里面
        //style与css-loader两者的顺序不能交换,执行是从后往前执行的
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              /* 
                对于小于limit的图片，会将图片编译成base64字符串的形式
                对于大于limit的图片，需要使用'file-loader'插件
              */

              limit: 8192,
              name: "img/[name].[hash:8].[ext]", //默认把图片类型打放到img文件夹里面，命名以原来的图片名称加上8位的哈希值
            },
          },
        ],
      },
      {
        /* //把ES6代码转换为ES5代码
        test: /\.js$/,
        //exclude 排除
        //include 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        }, */
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    // contentBase: "./dist",//服务于当前目录下的./dist的文件夹
    inline: ture, //表示是否需要实时的监听
  }, //webpack本地服务器
};
