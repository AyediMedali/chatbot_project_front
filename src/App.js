import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/containers/Header' ; 
import Body from './components/containers/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Body/>
      </div>
    );
  }
}

export default App;
