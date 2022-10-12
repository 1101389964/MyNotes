import React, { PureComponent } from 'react';

import About from './pages/about4-获取home4的axios请求';
import Home from './pages/home3';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
