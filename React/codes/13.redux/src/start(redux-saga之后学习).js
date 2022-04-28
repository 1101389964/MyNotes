//导入store
import store from "./store/index";

//导入action
import { addAction, subAction } from "./store/actionCreators";

//派发action，需求在dispatch之前和之后打印action
console.log("dispatch前---dispathching action:", addAction(5));
store.dispatch(addAction(5));
console.log("dispatch后---new state:", store.getState());

console.log("dispatch前---dispathching action:", subAction(1));
store.dispatch(subAction(1));
console.log("dispatch后---new state:", store.getState());

console.clear(); //清空控制台
/* 分析该方法的缺点：每次dispatch前后都需要打印对应的状态，如果dispatch次数过多，则太过繁琐；所以可以通过封装函数 */

function dispatchAndLogging(action) {
  console.log("dispatch前---dispathching action:", action);
  store.dispatch(action);
  console.log("dispatch后---new state:", store.getState());
}
dispatchAndLogging(addAction(5));
dispatchAndLogging(subAction(1));
/* 分析该方法的不足：该方法每次都需要导入对应的封装函数，使用体验可能并没有原来的store.dispatch好，可以直接修改原来的dispatch */

console.clear(); //清空控制台
/* 
  3.函数的基础之上进行优化：修改原有的dispatch 
  在原有代码的基础上：
  1.先用变量保存store.dispatch
  2.在封装的代码块里面用变量替代store.dispatch
  3.在函数外将封装的函数赋值给store.dispatch
  这样别人在使用时就可以直接使用store.dispatch来代替封装的函数了‘
  hack技术：monkeyingpatch
*/
// const next = store.dispatch;
// function DispatchAndLogging(action) {
//   console.log("dispatch前---dispathching action:", action);
//   next(action);
//   console.log("dispatch后---new state:", store.getState());
// }
// store.dispatch = DispatchAndLogging;
// store.dispatch(addAction(5));
// store.dispatch(subAction(1));

/* 在原有代码的基础上再次封装 */
console.clear();
function patchLogging(store) {
  const next = store.dispatch;
  function DispatchAndLogging(action) {
    console.log("dispatch前---dispathching action:", action);
    next(action);
    console.log("dispatch后---new state:", store.getState());
  }
  store.dispatch = DispatchAndLogging;
}
patchLogging(store);

//封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;

  function DispatchAndLogging(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }

  store.dispatch = DispatchAndLogging;
}
patchThunk(store);
// store.dispatch(addAction(5));
// store.dispatch(subAction(1));

// function foo(dispatch, getState) {
//   console.log(dispatch, getState);
//   dispatch(subAction(10));
// }
// store.dispatch(foo);

//封装applyMiddleware
function applyMiddleware(...middleware) {
  middleware.forEach((middleware) => {
    middleware(store);
  });
}

applyMiddleware(patchLogging, patchThunk);
