import counterReducer from "./counter";
import homeReducer from "./home";
import { combineReducers } from "redux";

/* function reducer(state = {}, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.counterReducer, action),
  };
} */

//等价为上面的写法
/*使用combineReducers的可以进行性能优化，如果某次action没有匹配到，那么返回的还是原来的state，但是返回总的对象却变了，
react浅层比较检测到props发送变化就会重新加载组件，浪费性能。而使用combineReducers如果没有匹配到action返回的还是原来的对象，就不会让组件重新加载*/
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
});

export default reducer;
