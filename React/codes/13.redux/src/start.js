//导入store
import store from "./store/index";

//导入action
import {
  addAction,
  decAction,
  subAction,
  incAction,
} from "./store/actionCreators";
-(
  //订阅修改
  store.subscribe(() => {
    console.log(store.getState());
  })
);

//派发action
store.dispatch(addAction(5));
store.dispatch(subAction(1));
store.dispatch(decAction());
store.dispatch(incAction());
