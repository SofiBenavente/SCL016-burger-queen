import logo from './logo.svg';
import './App.css';

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
