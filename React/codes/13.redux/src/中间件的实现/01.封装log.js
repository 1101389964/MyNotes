import { store, INCREMENT, SUBTRACT, MULTIOLICINE, DIVSION } from "./store.js"

// 1、要求在dispatch时打印dispatch时的action和每次dispatch之后的store值
function myConsole(action) {
  console.log('action :', action);
  store.dispatch(action)
  console.log('store :', store.getState());
}

myConsole({ type: INCREMENT, couter: 1 })
myConsole({ type: SUBTRACT, couter: 2 })

// 2、上述封装开发者需要每次调用`myConsole`，与直接调用store.dispatch的用户行为相互违背，一下代码解决该问题
const next = store.dispatch;
store.dispatch = (action) => {
  console.log('action :', action);
  next(action)
  console.log('store :', store.getState());
}
store.dispatch({ type: MULTIOLICINE, couter: 3 });
store.dispatch({ type: DIVSION, couter: 4 });
// 该技术被称为monkeyingpatch

// 3、第二部分next代码与store.dispatch是分离的，再次封装两者
export function dispatchAndLog(store) {
  const next = store.dispatch;
  store.dispatch = (action) => {
    console.log('action :', action);
    next(action)
    console.log('store :', store.getState());
  }
}
// 只需在每次使用前调用该函数即可
dispatchAndLog(store);
store.dispatch({ type: SUBTRACT, couter: 3 });
store.dispatch({ type: INCREMENT, couter: 4 });