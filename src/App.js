import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Business from './components/Business';
import Sport from './components/Sport';
import World from './components/World';
import Health from './components/Food';
import Technology from './components/Technology';
import BackToTopButton from './components/backToTop';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>

      <Switch location={location} key={location.key}>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/sport">
          <Sport />
        </Route>
        <Route path="/world">
          <World />
        </Route>
        <Route path="/health">
          <Health />
        </Route>
        <Route path="/technology">
          <Technology />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
      </AnimatePresence>
      <BackToTopButton/>
      <Footer/>
    </>
  );
}

export default App;