import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './form'
import PhoneList from './list'

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
        <MyForm />
        <PhoneList name="nastia" phone="+380111111111"/>
      </div>
    );
  }
}

export default App;
