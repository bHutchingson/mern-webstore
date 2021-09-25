import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/index'
import ProductCard from './components/productCard/index';
import Drawer from './components/drawer/index'
import Homepage from './pages/Homepage';

function App() {
  //handles mobile view navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //checks screensize on page load
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <BrowserRouter>
      <Navbar toggle={toggle}/>
      <Drawer isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/home' component={Homepage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
