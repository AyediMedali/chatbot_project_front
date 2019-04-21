import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import socketIOClient from "socket.io-client";
import {BrowserRouter, Route, Switch} from "react-router-dom" ;

import Navbar from './components/Navbar';
import Home from './components/Home' ;
import About from './components/About';

import Login from './components/Login'
import Logout from './components/Logout'
import Notfound from './components/notfound'
import storage from 'node-sessionstorage'

class App extends Component {


    constructor(props) {
        super(props);
        console.log(localStorage.getItem('user') + " constructor")
        console.log(localStorage.getItem('token') + " token constructor")
        this.state = {isLoggedIn: false};
    }

    componentDidMount() {
        if(localStorage.getItem('user') == '' || localStorage.getItem('user') == null)
        {
            this.setState({isLoggedIn:false})
        }
        else {
            this.setState({isLoggedIn:true})
        }
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const divStyle = {
            top: '190px',

        };
        let button;
        if (isLoggedIn) {
            button =
                <div style={divStyle}
                    className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right'>
                    <div className="fxb fxb-row fxb-row-col fxb-center-y">

                        <div
                            className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top'>
                            <a href="/logout" id="ctabutton"
                               className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGOUT</strong>INTRANET

                            </a>
                        </div>
                    </div>
                </div>


            {/*<button >*/}
                {/*<a href="/logout">Logout </a>*/}
            {/*</button>*/}
        } else {
            button =
                <div
                    className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right'>
                    <div className="fxb fxb-row fxb-row-col fxb-center-y">

                        <div
                            className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top'>
                            <a href="/login" id="ctabutton"
                               className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGIN</strong>INTRANET

                            </a>
                        </div>
                    </div>
                </div>


            {/*<button>*/}
                {/*<a href="/login">Login </a>*/}
            {/*</button>*/}
        }
        return (
            <React.Fragment>

                <div id="wrapper">
                    {button}

                    <BrowserRouter>
                        <div>
                            {/*<Navbar/>*/}
                            <Switch>
                                <Route exact path='/' component={Home} exact></Route>
                                <Route path='/about' component={About}></Route>
                                <Route path="/login" component={Login}/>
                                <Route path="/logout" component={Logout}/>
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

// import React, {Component} from 'react';
// import Layout from './components/Layout'
//
// class App extends Component {
//   render() {
//     return (
//           <Layout title={"chat"}/>
//     );
//   }
// }
//
// export default App;