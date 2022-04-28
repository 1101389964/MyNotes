import React, { memo, useEffect, useState } from "react";

import store from "../store/index";
import { addNum, subNum } from "../store/actions";

export default memo(function app() {
  const add = 5;
  const sub = 2;
  const [num, setNum] = useState(0);

  useEffect(() => {
    const num = store.getState().num;
    setNum(num);
  }, [store]);

  function Add(num) {
    store.dispatch(addNum(num));
  }

  function Sub(num) {
    store.dispatch(subNum(num));
  }

  return (
    <div>
      <div>当前数字:{num}</div>
      <button
        onClick={(add) => {
          Add(add);
        }}
      >
        +{add}
      </button>
      <button
        onClick={(sub) => {
          Sub(sub);
        }}
      >
        -{sub}
      </button>
    </div>
  );
});
