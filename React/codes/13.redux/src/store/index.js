import { createStore, applyMiddleware, compose } from "redux";
//applyMiddleware 为中间键

import reducer from "./reducer.js";

import saga from "./saga";

//导入redux-saga函数
import createSagaMiddleware from "redux-saga";

import thunkMiddleware from "redux-thunk";

//创建creteSagaMiddleware中间件
const creteSagaMiddleware = createSagaMiddleware(); //createSagaMiddleware为函数

//应用中间键(可以应用多个中间键)
const storeEnhancer = applyMiddleware(thunkMiddleware, creteSagaMiddleware);

//composeEnhancers函数，把storeEnhancer传递给composeEnhancers函数可以在浏览器看到reudx数据的状态信息
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;

const store = createStore(reducer, composeEnhancers(storeEnhancer));

creteSagaMiddleware.run(saga);

export default store;
