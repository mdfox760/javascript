import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
			  </p>
			  <p>
			    What a nice little formatted page! It takes html and serves it up. If you edit here,
			    it will load by itself. But watch those single quotes! 
        </p>
			  <p>			
			    "What a weird bit of technology." 'Single quotes do even stranger things in the editor.'
        </p>
			  <p>
			  </p>
      </div>
    );
  }
}

export default App;
