// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Getstarted from './Components/Get-started'


function App() 
{
  return(
    <div className="App" style={{marginTop: 135}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link"href="https://reactjs.org"target="_blank"rel="noopener noreferrer">Learn React</a>
      </header> */}
      <h1 style={{padding: 0,marginTop: 0}}>My First React App</h1>
      <Getstarted name="Rishab"/>
    </div>
  );
}

export default App;
