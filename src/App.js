import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.js'

const App = () => {
  useEffect(() => {
    // init material js
    M.AutoInit();
  });
  return (
    <div className="App">
      My App
    </div>
  );
}

export default App;
