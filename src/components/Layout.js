import React, {Component} from 'react';
import socketIOClient from "socket.io-client";

class Layout extends Component {

    constructor(props){
        super(props)
        this.state ={
            socket: null
        }
    }

    componentWillMount() {
        this.initSocket()
    }

    initSocket = () =>{
        const socket = socketIOClient('https://chatbot-bug-hunters-back.herokuapp.com/');
        socket.on('ai response', function(response) {
        console.log(response)

          this.setState({socket})

        })
    }

    render() {
        const { title } = this.props
        return (
            <div className="container">
                {title}
            </div>
        );
    }
}

export default Layout;