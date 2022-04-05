<template>
  <div>
    <h2 class="title">Hello World</h2>
    <h1 v-text="message"></h1>
    <cpn />
  </div>
</template>

<script>
//引入另一个vue组件
import cpn from "./Cpn";
export default {
  name: "App",
  data() {
    return { message: "hello webpack" };
  },
  methods: {},
  computed: {
    cpn,
  }, //注册组件
};
</script>

<style>
.title {
  color: chartreuse;
}
</style>
