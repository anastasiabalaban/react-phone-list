import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SavedNumbers from './saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hi! My name is Anastasia. Nice to meet you :)
        </p>
        <SavedNumbers />
      </div>
    );
  }
}

export default App;
