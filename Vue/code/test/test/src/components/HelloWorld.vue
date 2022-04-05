<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{}}</button>
  <button></button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: {
        a: { z: [1, 2, 3] },
      },
    };
  },
  beforeUnmount() {},
};
</script>
