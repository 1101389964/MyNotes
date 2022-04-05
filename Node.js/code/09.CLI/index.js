#!/usr/bin/env node
const commander = require("commander");

commander.version(require("./package.json").version); //显示当前版本 tqa --version; require可以获取json文件里面的信息
commander.parse(process.argv); //读取命令行的指令，依次来显示对应的信息,这个要放在最下面，否则读取到信息还没有配置该信息，无法显示；必须先配置再读取

console.log("hello world");
