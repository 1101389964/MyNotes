import Vue from "vue";
import VueRouter from "vue-router";

//注册插件
Vue.use(VueRouter);

//定义路由，
const routes = [];

//创建路由
const router = new VueRouter({
  routes //相当于vue里面的data属性
});

//导处router实例
export default router;
