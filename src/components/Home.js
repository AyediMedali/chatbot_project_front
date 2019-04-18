import React, {Component} from 'react';
import socketIOClient from "socket.io-client";

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {messages : []}
  }
  componentDidMount() {
    this.socket = socketIOClient('http://localhost:3000/');
    this.socket.on('ai response', function(response) {
      console.log(response)

      const msg = {
        body: response,
        from: 'robot'
      }
      console.log(msg)
      // this.state = {messages : []}
      console.log(this.state)
      //  console.log(this.state.messages)


      this.setState({messages:[...this.state.messages, msg ]})
      console.log(this.state.messages)

    }.bind(this))
  }

  handleSubmit = event =>{
    const body  = event.target.value
    if(event.keyCode === 13  && body){
      const message = {
        body,
        from: 'Me'
      }
      console.log(this.state)

      this.setState({messages:[...this.state.messages, message ]})
      this.socket.emit('chat request',body)
      event.target.value = ''
    }
  }


  render() {
    const messages = this.state.messages.map((message, index)=> {
      return <li key={index}><b>{message.from}:</b>{message.body}</li>
    })
    return (
        <div id="main" className="container">
          <input type="text" placeholder='enter a message' onKeyUp={this.handleSubmit}/>
          {messages}
        </div>
    );
  }
}

export default Home;