import React, {Component} from 'react';

class Logout extends Component {

    constructor(props){
        super(props);
        this.state= {
            message: ""
        }}

    componentDidMount(){
        fetch('http://localhost:3000/logout')
            .then(res => res.json())
            .then(res => {
                console.log("no session")

                this.setState({
                    message: res.msg
                })
            });
    }

    render() {
        var {message} = this.state ;
        return (
            <div id="main" className="container">
                <h2>{message}</h2>
            </div>
        )
    }


}

export default Logout;
