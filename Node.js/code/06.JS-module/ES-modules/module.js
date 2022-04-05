//导出方式一：单个导出
export const title = "hello";

//导出方式二：合并导出
const age = 21;
const hobbies = [1, 2, 3];
export { age, hobbies }; //注意这里与module.exports不一样，这里不是对象，只是放置导出变量的引用列表

//导出方式三：重命名导出
const school = "ZUST";
const profession = "Computer Science";
export { school as s, profession as p };

//导出方式四：默认导出,只能有一个默认导出
const a = "a";
export default a;
