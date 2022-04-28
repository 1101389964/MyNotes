import React, { PureComponent } from "react";

import store from "../store";

/* 
高阶函数中嵌套高阶组件
*/
export function connect(mapStateToProps, mapDispachtoProp) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {
      constructor() {
        super();
        this.state = {
          storeState: mapStateToProps(store.getState()),
        };
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState()),
          });
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...this.state.storeState}
            {...mapDispachtoProp(store.dispatch)}
          />
        );
      }
    };
  };
}
