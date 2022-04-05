export default {
  template: `<div>
        <h2>Hello World</h2>
        <h1 v-text="message"></h1>
      </div>`,
  data() {
    return { message: "hello webpack" };
  },
};
