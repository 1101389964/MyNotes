import React, { PureComponent } from "react";

export const Context = React.createContext();

function fun(stateData, dispatchs) {
  return function (App) {
    class Connect extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
          data: stateData(context.getState()),
        };
      }

      componentDidMount() {
        this.unsubscribue = this.context.subscribe(() => {
          this.setState({
            data: stateData(this.context.getState()),
          });
        });
      }

      componentWillUnmount() {
        this.unsubscribue();
      }

      render() {
        return (
          <App
            {...this.props}
            {...this.state.data}
            {...dispatchs(this.context.dispatch)}
          />
        );
      }
    }
    Connect.contextType = Context;
    return Connect;
  };
}
export default fun;
