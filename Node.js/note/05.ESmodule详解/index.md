## 01、export基础

* 存在两种 exports 导出方式：

  * 命名导出（每个模块包含任意数量）
  * 默认导出（每个模块包含一个）

* ```js
  // 导出单个特性
  export let name1, name2, …, nameN; // also var, const
  export let name1 = …, name2 = …, …, nameN; // also var, const
  export function FunctionName(){...}
  export class ClassName {...}
  
  // 导出列表
  export { name1, name2, …, nameN };
  
  // 重命名导出
  export { variable1 as name1, variable2 as name2, …, nameN };
  
  // 解构导出并重命名
  export const { name1, name2: bar } = o;
  
  // 默认导出
  export default expression;
  export default function (…) { … } // also class, function*
  export default function name1(…) { … } // also class, function*
  export { name1 as default, … };
  
  // 导出模块合集
  export * from …; // does not set the default export
  export * as name1 from …; // Draft ECMAScript® 2O21
  export { name1, name2, …, nameN } from …;
  export { import1 as name1, import2 as name2, …, nameN } from …;
  export { default } from …;                                                                           
  ```

* 着重注意以下几点：

  - **在你的 HTML 中需要包含 type="module" 的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script) 元素这样的脚本，以便它被识别为模块并正确处理**
  - **不能通过 `file://` URL 运行 JS 模块 — 这将导致 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 错误。你需要通过 HTTP 服务器运行。**

* 导出模块集合可以实现覆盖

  ```javascript
  // test.js
  export function foo() {
    console.log('foo');
  }
  
  export function fun() {
    console.log('fun');
  }
  
  // cover.js
  export * from './test';
  
  export function foo() {
    console.log('hhhh');
  }
  
  // 调用cover文件里面
  import { foo, fun } from './utils/cover'
  
  fun(); // fun
  foo(); // hhhh
  ```

  



## ESmoudule加载过程

* **ES Module加载js文件的过程是编译（解析）时加载的，并且是异步的:**
  * **编译时(解析）时加载**，
    * 意味着import不能和运行时相关的内容放在一起使用:比如from后面的路径需要动态获取;
    * 比如不能将import放到if等语句的代码块中;
    * 所以我们有时候也称ES Module是静态解析的，而不是动态或者运行时解析的;
  * **异步的意味着:**
    * JS引擎在遇到import时会去获取这个js文件，但是这个获取的过程是异步的，并不会阻塞主线程继续执行;
    * **也就是说设置了type=module的代码，相当于在script标签上也加上async属性;**
    * 如果我们后面有普通的script标签以及对应的代码，那么ES Module对应的js文件和代码不会阻塞它们的执行;

## 关于export导出的数据在内存中的存取

观看视屏：node/3/2小时34分

