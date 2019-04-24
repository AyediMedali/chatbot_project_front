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
import Exams from './components/Exams'
import InternalRegulations from './components/Internal_Regulations'
import Internships from './components/Internships'

import Notfound from './components/notfound'
import storage from 'node-sessionstorage'
import Restaurant from "./components/Restaurant";
import Quiz from "./components/Quiz_score";
import Dorm from "./components/Dorm";
import BranchList from "./components/Branches/BranchList";

class App extends Component {




    render() {

        return (
            <React.Fragment>

                    <BrowserRouter>
                    
                        <div>
                            <Navbar/>

                            <div className="zn_pb_wrapper clearfix zn_sortable_content" data-droplevel={0}>		<div className="kl-slideshow simpleslider__slideshow eluid4e24dbb6  maskcontainer--mask4 mask4l ">
                            <div className="fake-loading loading-2s" />
                            <div className="bgback" />
                            <div className="kl-bg-source"><div className="kl-bg-source__bgimage" style={{backgroundImage: 'url(http://esprit.tn/wp-content/uploads/2016/04/10426796_729097043828492_8312068013354344062_n.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center top', backgroundSize: 'cover'}} /><div className="kl-bg-source__overlay" style={{background: 'linear-gradient(to bottom,  rgba(239,239,239,0.85) 0%,rgba(255,255,255,0.95) 100%)'}} /></div>			<div className="th-sparkles" />
                            <div className="kl-slideshow-inner container kl-slideshow-safepadding">
                            <div className="row">
                            <div className="col-sm-12">
                            <div className="zn_simple_slider_container showOnMouseover   kl-flex--modern">


                            <Switch>
                                <Route exact path='/' component={Home} exact></Route>
                                <Route path='/about' component={About}></Route>
                                <Route path="/login" component={Login}/>
                                <Route path="/internships" component={Internships}/>
                                <Route path="/pfe" component={Internships}/>
                                <Route path="/exams" component={Exams}/>
                                <Route path="/internal_regulations" component={InternalRegulations}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/logout" component={Logout}/>
                                <Route path="/Restaurant_and_prices" component={Restaurant}/>
                                <Route path="/Quiz_score" component={Quiz}/>
                                <Route path="/Dorm_and_reservations" component={Dorm}/>
                                <Route path="/Branch_list" component={BranchList} />
                                <Route component={Notfound}/>
                            </Switch>

                            </div></div></div></div></div></div>

                        </div>

                    </BrowserRouter>



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