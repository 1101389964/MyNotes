import React, { Component } from "react";

/* 
PropType是进行父传子数据验证的方法
从React 15.5开始，React.PropType已移入pro-types库里面 
*/
import PropType from "prop-types";

function Son(props) {
  const { name, year, height, hobbies } = props;
  return (
    <div>
      <h2>
        name:{name} year:{year} height:{height}
        <ul>
          {hobbies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

/* 
调用Son的protoType属性进行验证,
注意：对象里面的PropType是导入的，
而protoType给类添加的静态属性，
一个P大写一个p小写
如果在类组件里面可以直接这样写
在类里面直接添加静态属性
class Son extends Component {
    ststic propTypes = {
        ....
    }
}
*/

//总结：ProtoType只能对单独的props进行验证，比如这个验证的数据项式对象，对象里面包含了其他的数据，则不能对对象里面的数据进行验证
Son.ProtoType = {
  name: PropType.string.isRequired, //isRequired表示必须要传递的参数
  year: PropType.number,
  height: PropType.number,
  hobbies: PropType.array,
};

/* 当没有传递参数时的默认属性 */
Son.defaultProps = {
  name: "noName",
  year: 0,
  height: 0,
  hobbies: [],
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Son name="Ao" year={21} height={180} hobbies={["code", "movies"]} />
        {/* 没有传递参数 */}
        <Son />
      </div>
    );
  }
}
