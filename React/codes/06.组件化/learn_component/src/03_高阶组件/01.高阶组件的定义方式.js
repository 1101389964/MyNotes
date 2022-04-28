import React, { PureComponent } from "react";

class cmp extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        App组件
        <h2>name:{this.props.name}</h2>
        <h2>year:{this.props.year}</h2>
      </div>
    );
  }
}
/* 通过把组件封装到函数里面返回出去 */
function higherOrderComponent(WrapperComponent) {
  class NewComponent extends PureComponent {
    render() {
      /* 
        this.props为传入的属性
        不能直接在App组件里面使用参数
        必须通过函数间接传递
       */
      return <WrapperComponent {...this.props} />;
    }
  }
  return NewComponent; //等价于返回了 <WrapperComponent {...this.props} />
}

const App = higherOrderComponent(cmp);

export default App;
