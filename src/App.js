import React from 'react';
import { Route, Switch } from "react-router-dom";

import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();

  return (
  <div>
    hello
  </div>
  );
}

export default App;