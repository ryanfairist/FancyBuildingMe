import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fancy Building Me</h1>
        <h3>What building is this?<br/>
          Gosh I just love skylines, but what building is that?<br/>
           What is the name of this cool bridge?</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <h6>
          Edit <code>src/App.js</code> and save to reload.
        </h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ryan D'Uva
        </a>
      </header>
    </div>
  );
}

export default App;
