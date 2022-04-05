module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    "no-unused-vars": "off", //变量未使用报错关闭。还有一个值"warn"：变量未使用为警告；"error":变量未使用报错
  },
};
