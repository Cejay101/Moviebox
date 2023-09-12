import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();

  return (
  <div>
    <Navbar/>
    
  </div>
  );
}

export default App;