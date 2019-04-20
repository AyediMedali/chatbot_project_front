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


class App extends Component {



 /* render() {
    const messages = this.state.messages.map((message, index)=> {
      return <li key={index}><b>{message.from}:</b>{message.body}</li>
    })
    return (
      <div className="App">
        <h1>Hello world</h1>
        <input type="text" placeholder='enter a message' onKeyUp={this.handleSubmit}/>
        {messages}
      </div>
    );
  }
}*/
// render() {
//   return(
//     <React.Fragment>
//
//     <div id="wrapper">
//
//
//     <BrowserRouter>
//       <div>
//
//         <Switch>
//           <Route path='/' component={Home} exact></Route>
//           <Route path='/about' component={About}></Route>
//
//         </Switch>
//       </div>
//
//     </BrowserRouter>
//
// </div>
//
//
//     </React.Fragment>
//   );
// };


    /* render() {
       const messages = this.state.messages.map((message, index)=> {
         return <li key={index}><b>{message.from}:</b>{message.body}</li>
       })
       return (
         <div className="App">
           <h1>Hello world</h1>
           <input type="text" placeholder='enter a message' onKeyUp={this.handleSubmit}/>
           {messages}
         </div>
       );
     }
   }*/
    render() {
        return (
            <React.Fragment>

                <div id="wrapper">


                    <BrowserRouter>
                        <div>
                            <Navbar/>
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