import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './css/style.css';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {messages : [],
                  page: ""}


  }
  componentDidMount() {
    this.socket = socketIOClient('http://localhost:3000/');
    this.socket.on('ai response', function(response) {
      // console.log("response")

      // console.log(response)
      // this.setState({page:response.page})

      const msg = {
        body: response,
        from: 'robot'
      }
      console.log(msg.body.msg+ " message")
      console.log(msg.body.page + " page name")
      // this.state = {messages : []}
      // console.log(this.state)
      //  console.log(this.state.messages)

      // if(msg.body!="")
      // {
        this.setState({messages:[...this.state.messages, msg ]})
        this.setState({page:response.page})
     // }



      // console.log(this.state.messages)

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
    var {page} = this.state
    const messages = this.state.messages.map((message, index)=> {
//      return <li key={index}><b>{message.from}:</b>{message.body}</li>

      if (message.from ==='Me')
      {

        return <div className="row message-body">
          <div className="col-sm-12 message-main-receiver pull-right">
            <div className="sender">
              <div class="message-text">


              { message.body.msg ? message.body.msg : message.body }

              </div>
              <span className="message-time pull-right">
          </span>
            </div>
          </div>
        </div>
      }
      else if(message.from ==='robot')
      {
        // var ex = 'test'
        // if({page} === 'ExamPage')
        // {
        //    ex =
        // }

        return <div className="row message-body">
          <div className="col-sm-12 message-main-receiver">
            <div className="receiver">
              <div class="message-text">

              { message.body.msg ? message.body.msg : message.body }
              </div>
              <span className="message-time pull-left">
          </span>
            </div>
          </div>
        </div>
      }



    })
    
    return (
        <div >


          {/*<div className="container">*/}
            {/*<input type="text" placeholder='enter a message' onKeyUp={this.handleSubmit}/>*/}
            {/*{messages}*/}
            <div className="row ">
              <div className="col-sm-4 conversation app-one">
                <div className="heading">
                  <div className="col-sm-6 col-md-3 col-xs-4 heading-avatar">
                    <div className="heading-avatar-icon">
                      {/*<img src="./images/avatar.png"/>*/}
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-6 heading-name">
                    <a className="heading-name-meta">Esprit Chatbot
                    </a>
                    <span className="heading-online">Online</span>
                  </div>
                  <div className="col-sm-1 col-xs-1  heading-dot pull-right">
                    <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="row message" id="conversation">
                  {messages}
                  </div>

                <div className="row reply">

                  <div className="col-sm-8 col-xs-8 reply-main">
                    <textarea className="form-control" rows="2" id="comment" onKeyUp={this.handleSubmit}></textarea>
                  </div>
                  <div className="col-sm-2 col-xs-2 reply-recording">
                    <i className="fa fa-microphone fa-2x" aria-hidden="true" id="microphone-send"></i>
                  </div>
                  <div className="col-sm-2 col-xs-2 reply-send">
                    <i className="fa fa-send fa-2x" aria-hidden="true" id="chat-send"></i>
                  </div>
                </div>
                </div>

                <div className="col">

                 {page}
                  </div>
              </div>

            </div>
          // </div>



    );
  }
}

export default Home;