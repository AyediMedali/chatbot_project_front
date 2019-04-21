import React, {Component} from 'react';
import storage from "node-sessionstorage";
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    constructor(props){
        super(props);
        this.state= {
            message: "",
            // redirect: false

        }}

    componentDidMount(){
        fetch('http://localhost:3000/logout')
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('user', '')
                localStorage.setItem('token', '')
                console.log("no session")

                this.setState({
                    message: res.msg
                })

                 this.props.history.push('/login');
                window.location.reload();
                // this.setState({redirect: true})

            });
    }

    render() {
        var {message,redirect} = this.state ;
        // if(redirect){
        //     return <Redirect push to="/login"/>
        // }
        return (
            <div id="main" className="container">
                <h2>{message}</h2>
            </div>
        )
    }


}

export default Logout;
