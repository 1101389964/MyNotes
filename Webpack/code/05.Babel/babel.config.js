module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        /**
         * 有三个可设置的值：
         * false:不会使用任何的polyfill相关的代码;
         * usage:需要哪些polyfill的补丁就用相关的api，比如引入了promise,就会在打包的文件中添加解析promise的代码;
         * enter:默认不会生效的，需要在入口文件中导入`import 'core-js/stable'; import 'regenerator-runtime/runtime';
         */
        useBuiltIns: 'usage',
        corejs: 3 //指定当前的corejs版本为第三个版本，默认为2.0的版本
      }
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript']
  ]
}
