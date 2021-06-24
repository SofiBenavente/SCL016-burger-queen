
import './App.css';
import React, {Fragment, useState} from 'react';
import logo from './Images/Burger_logo.png';


function App() {
  return (
    <div className="App">
    <header className = 'header'>
    <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div className = 'menu'>
     <nav>
       <p>MENU</p>
       <ul>
         <li>Hamburguesas</li>
         <li>Acompañamiento</li>
         <li>Para tomar</li>
       </ul>
     </nav>
     </div>
    </div>
  );
}

export default App;