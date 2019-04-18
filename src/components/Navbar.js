import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return(
            <header id="header">
            <nav className="navbar navbar-inverse" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="https://dialogflow.com/" />
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                  <li> <a href="https://dialogflow.com/pricing/" target="_blank"><NavLink to='/about' >Schooling<span /></NavLink></a> </li>
                   <li><a href="https://dialogflow.com/blog/" target="_blank"> <NavLink to='/about'>Admission trial<span /></NavLink></a></li>
                    <li><a href="https://dialogflow.com/pricing/" target="_blank"><NavLink to='/about'>Social life<span /></NavLink></a></li>
                   <li><a href="https://dialogflow.com/blog/" target="_blank"> <NavLink to='/'>Branch choosing<span /></NavLink></a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        );
    }
}

export default Navbar;