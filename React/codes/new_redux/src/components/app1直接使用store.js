import React, { memo, useEffect, useState } from "react";

import store from "../store/index";
import { addNum, subNum } from "../store/actions";

export default memo(function App() {
  const add = 5;
  const sub = 2;
  const [count, countNum] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      const num = store.getState().num;
      countNum(num);
    });
  }, []);

  function Add(num) {
    store.dispatch(addNum(num));
  }

  function Sub(num) {
    store.dispatch(subNum(num));
  }

  return (
    <div>
      <div>当前数字:{count}</div>
      <button
        onClick={() => {
          Add(add);
        }}
      >
        +{add}
      </button>
      <button
        onClick={() => {
          Sub(sub);
        }}
      >
        -{sub}
      </button>
    </div>
  );
});
