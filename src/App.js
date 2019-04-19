import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import socketIOClient from "socket.io-client";
import {BrowserRouter, Route, Switch} from "react-router-dom" ;

import Navbar from './components/Navbar';
import Home from './components/Home' ;
import About from './components/About';

import Login from './components/Login'
import Notfound from './components/notfound'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {messages: []}
        this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.socket = socketIOClient('http://localhost:3000/');
        this.socket.on('ai response', function (response) {
            console.log(response)

            const msg = {
                body: response,
                from: 'robot'
            }
            // console.log(msg)

            //this.setState({messages:[msg, ...this.state.messages]})

        })
    }

    handleSubmit = event => {
        const body = event.target.value
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me'
            }
            //  console.log(body + " msgg")
            this.setState({messages: [message, ...this.state.messages]})
            this.socket.emit('chat request', body)
            event.target.value = ''
        }
    }

    handleLogout = event => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        if (localStorage.getItem('token'))
            return (

                <React.Fragment>
                    <Navbar/>
                    <div id="wrapper">

                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route exact path='/' component={Home} exact></Route>
                                    <Route path='/about' component={About}></Route>
                                    <Route component={Notfound}/>
                                </Switch>
                            </div>

                        </BrowserRouter>

                    </div>


                </React.Fragment>
            );
        else
            return (
                <React.Fragment>

                    <div id="wrapper">
                        <Navbar/>
                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route exact path='/' component={Home} exact></Route>
                                    <Route path='/about' component={About}></Route>
                                    <Route path="/login" component={Login}/>
                                    <Route component={Notfound}/>
                                </Switch>
                            </div>

                        </BrowserRouter>

                    </div>


                </React.Fragment>

            );
    };
}

export default App;

