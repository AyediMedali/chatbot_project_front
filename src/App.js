import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './containers/Home' ;

class App extends Component {
  render() {
    return (
      <div className="App">
      <body>
        <Header/>
        <Home/>
        <Footer/>
        </body>
      </div>
    );
  }
}

export default App;
