
import React, {Fragment, useState} from 'react';
import logo from './Images/Burger_logo.png';
import 'bootswatch/dist/journal/bootstrap.min.css'; // Added this :boom:
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
    <header className = 'header'>
    <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Card/>
    </div>
  );
}

export default App;
