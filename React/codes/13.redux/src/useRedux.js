// import redux from 'redux';
const redux = require('redux')

const initialState = {
  couter: 0
} //该对象在reducer执行中并不会改变，

//定义reducer纯函数
/* 
    state初始值为undefined，会初始化为initialState,
    当后面有值之后就不会执行state = initialState 
    会变为上一次执行后的state结果
*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, couter: state.couter + 1 }
    case 'DECREMENT':
      return { ...state, couter: state.couter - 1 }
    case 'ADD_NUMBER':
      return { ...state, couter: state.couter + action.num }
    case 'REDUCE_NUMBER':
      return { ...state, couter: state.couter - action.num }
    default:
      return state
  }
}

//store(创建时需要传入reducer纯函数)
const store = redux.createStore(reducer)

//订阅store修改,订阅一定要在派发dispatch前面，否则不会检测到改变
store.subscribe(() => {
  console.log('couter:', store.getState().couter, 'initialState:', initialState)
})

//action

const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', num: 6 }
const action4 = { type: 'REDUCE_NUMBER', num: 3 }

//派发action，dispatch执行完之后返回执行的action
const res = store.dispatch(action1) //第一次派发action reducer会执行两次
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
