// var { add, mul } = require("./math.js");
import { add, mul } from "./math.js";
import "../css/index.css";
import "../css/style.less";
add(3, 2);
mul(2, 3);

import Vue from "vue";
// import App from "../vue.js/app";
import App from "../vue.js/App.vue";
//模块化把vue组件的类容放到另一个js/vue文件
new Vue({
  el: "#app",
  /* vue解析到template属性会自动将template里面的内容替换掉#app
  所以实际开发html，#app里面不写内容，通过vue的组件化来开发的
  */
  template: `<App/>`,
  data: {},
  methods: {},
  components: {
    App,
  },
});
