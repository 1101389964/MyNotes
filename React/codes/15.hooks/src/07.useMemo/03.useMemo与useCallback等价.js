import React, {useCallback, useMemo, useState, useEffect} from 'react'

export default function Index() {
  const [state, setState] = useState(true);

  const memoizedCallback = useCallback(
    () => {
     console.log('memoizedCallback',state);
    },
    [state],
  );

  const memoizedValue = useMemo(() => () => {
    console.log('memoizedCallback',state);
  }, [state])
  
  return (
    <div>Index</div>
  )
}
