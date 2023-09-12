import React from 'react';
import { Route, Switch } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import Header from './components/Header';
function App() {
  const location = useLocation();

  return (
  <div>
    <Header/>
    
  </div>
  );
}

export default App;