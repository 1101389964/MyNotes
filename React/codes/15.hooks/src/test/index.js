import React from 'react'

import Father from './father'

const App = (props) => {
    return(
        <Father>
            {(args) => {
              console.log(args);        
                 return (
                  <div>hello</div>
                );
            }}
        </Father>
    )
}

export default App;