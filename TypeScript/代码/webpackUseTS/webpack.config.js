//引入拼接一个路径的包
const path = require("path");
//引入html插件
const HTMLwebpack = require("html-webpack-plugin");
//引入clean插件
const CleanWebpack = require("clean-webpack-plugin");

//webpack所有的配置信息都写到module.exports里面
module.exports = {
  //入口文件
  entry: "./src/index.ts",
  //指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"), //打包文件的路径
    /* 
        动态的获取绝对路径 ,path是node一个对象，代码第一行引入了path,resolve是对象的方法
        可以自动获取当前文件所在位置，然后拼接./dist路径；
    */
    filename: "bundle.js", //打包后的文件名
  },
  //指定webpack打包是要使用的模块
  module: {
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/, //匹配所有以ts结尾的文件
        use: [
          {
            //设置loader
            loader: "babel-loader",
            //
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    targets: {
                      chrome: "66",
                      ie: "11",
                    }, //targets指定浏览器的版本
                    corejs: "3", //corejs版本
                    useBuiltIns: "usage", //表示按需加载
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ], //use属性是从后往前执行的，所以得先进行ts解析才能执行后面的步骤
        exclude: /node_modules/, //排除需要编译的文件
      },
    ],
  },
  mode: "none",
  //配置webpack的插件，该插件可以自动生产html文件并引入相关文件
  plugins: [
    new HTMLwebpack({
      title: "webpack",
      //自定义html的title
      template: "./src/index.html",
      /* 
     以./src/index.html为模板生成对应的html文件
     当以./src/index.html为模板时title并不会起作用
    */
    }),
  ],
  //设置引用模块
  resolve: {
    extensions: [".ts", ".js"], //当以.ts,.js文件为扩展名时都可以模块化引用
  },
};
