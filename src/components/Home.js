import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './css/style.css';
import {GoogleMap} from 'react-google-maps';
import Map from "./Events/Map";

import DynamicContextExams from './DynamicContextExams';
import DynamicContextInternalRegulations from './DynamicContextInternalRegulations';
import DynamicContextSkills from './DynamicContextSkills';
import DynamicContextInternships from './DynamicContextInternships';
import CloseEventMap from "./Events/CloseEventMap";
import CarouselObjects from "./lostObjects/Carousel";
import {Button} from "react-bootstrap";
import StudentStory from './Branches/StudentStory' ;
import SafeRouteDecision from './Branches/SafeRouteDecision';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            page: "",
            skills: [],
            best_pfe: [],
            exams: [],
            display: 'none',
            buttonValue: 'Display Exams Calendar',
            id: ''
        }


    }

    componentDidMount() {
        this.socket = socketIOClient('http://localhost:3000/');
        this.socket.on('ai response', function (response) {
            console.log(response)
            const msg = {
                body: response,
                from: 'robot'
            }

            this.setState({messages: [...this.state.messages, msg]})
            this.setState({page: response.page})
            this.setState({id: response.id})
            // }
            if (this.state.page == 'SkillsPage'
                || this.state.page == 'PfePage'
                || this.state.page == 'ExamPage'

            ) {

                fetch('http://localhost:3000/get_connected_user')
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)

                        console.log(res.user.exams)

                        if (this.state.page == 'SkillsPage') {
                            this.setState({skills: res.user.skills})
                        } else if (this.state.page == 'PfePage') {
                            this.setState({best_pfe: res.user.internships})
                        }
                        if (this.state.page == 'ExamPage') {
                            this.setState({exams: res.user.exams})
                        }

                    });
            }


        }.bind(this))
    }

    /* handleSafe = event => {
        console.log("launches ");
        console.log("**************");
        console.log(event.target.value) ;
        const body  ="i will stay at the company"
        const message = {
            body ,
            from: 'Me'
        }
        this.setState({messages: [...this.state.messages, message]})
        this.socket.emit('chat request', body)

    }*/
    handleSafe(type){
        console.log("launches ");
        console.log("**************");
        var body ="" ;
        if(type=="stay")
        {
         body  ="i will stay at the company" ;
        }
        else if(type=="leave")
        {
             body = "i will start my own startup";
        }
        const message = {
            body ,
            from: 'Me'
        }
        this.setState({messages: [...this.state.messages, message]})
        this.socket.emit('chat request', body)
    }

    handleSubmit = event => {
        const body = event.target.value
        // console.log(body.replace(/\s/g, '').length)
        if (event.keyCode === 13 && body.replace(/\s/g, '').length) {
            const message = {
                body,
                from: 'Me'
            }

            this.setState({messages: [...this.state.messages, message]})
            this.socket.emit('chat request', body)


            event.target.value = ''

        }
    }

    onClickCalendar = event => {
        if (this.state.display == 'none') {
            this.setState({display: ''})
            this.setState({buttonValue: 'Hide Exams Calendar'})
        } else if (this.state.display == '') {
            this.setState({display: 'none'})
            this.setState({buttonValue: 'Display Exams Calendar'})
        }


    }




    according_to_context() {


        if (this.state.page == '' || this.state.page == undefined) {
            if (localStorage.getItem('token') == '') {
                return <h2>Welcome to ESPRIT Chatbot</h2>
            } else
                return <h2>Welcome to ESPRIT Chatbot {localStorage.getItem('firstname')} </h2>

        } else if (this.state.page == 'ExamPage') {

            var items = this.state.exams;
            const btnStyle = {
                background: '#B22222',
                color: 'white',
            };
            var divNumber = 0

            if (items.length == 0) {
                return (
                    <div>
                        <Button

                            variant="outline-danger"
                            style={btnStyle}
                            onClick={this.onClickCalendar}
                            type="submit"
                        >
                            {this.state.buttonValue}
                        </Button>
                        <h2>Sorry you don't have any Exams
                        </h2>
                    </div>
                );
            } else {

                return (
                    <div id="main" className="container">
                        <Button

                            variant="outline-danger"
                            style={btnStyle}
                            onClick={this.onClickCalendar}
                            type="submit"
                        >
                            {this.state.buttonValue}
                        </Button>


                        <div className="row" >
                            {items.map(item => (

                                    <div >


                                        <div className="col-sm-5"  key={item._id}>
                                            <br/>********* EXAM ******** <br/>
                                            exam_type : {item.exam_type} <br/>
                                            coef : {item.coef} <br/>
                                            passing_date : {item.passing_date} <br/>
                                            passing_way : {item.passing_way} <br/>

                                        </div>

                                    </div>


                                ))}

                        </div>


                        <div style={{display: this.state.display}}>
                            <DynamicContextExams/>
                        </div>

                    </div>

                );
            }


        } else if (this.state.page == 'InternalRegulationsPage') {
            return (
                <DynamicContextInternalRegulations/>
            );
        } else if (this.state.page == 'PfePage') {
            var items = this.state.best_pfe;

            if (items.length == 0) {
                return (
                    <div>Sorry you don't have any internships for your skills</div>
                );
            } else {
                return (
                    <div id="main" className="container">
                        <ul>
                            {items.map(item => (


                                <li key={item._id}>

                                    <br/>********* PFE ******** <br/>
                                    Entreprise : {item.entreprise} <br/>
                                    Description : {item.description} <br/>
                                    Profile request : {item.profile_request} <br/>
                                    Start date : {item.start_date} <br/>
                                    End date : {item.end_date} <br/>
                                    Location : {item.location} <br/>

                                </li>

                            ))}
                        </ul>
                    </div>
                );
            }

        } else if (this.state.page == 'SkillsPage') {

            var items = this.state.skills;

            if (items.length == 0) {
                return (

                    <div>
                        <h2>Sorry you don't have any skills yet</h2>
                    </div>
                );
            } else {
                return (
                    <div id="main" className="container">
                        <ul>
                            {items.map(item => (
                                <li key={item._id}>
                                    title : {item.title} ;

                                </li>
                            ))}
                        </ul>

                    </div>
                );
            }
        } else if (this.state.page === 'EventPage') {
            const messages = this.state.messages;

            return (
                <div>
                    <h2>Please pick your event's location</h2>
                    <Map eventId={messages}/>
                </div>
            );

        } else if (this.state.page === 'CloseEvent') {
            const lat = localStorage.getItem('lat');
            const lng = localStorage.getItem('lng');
            const eventName = localStorage.getItem('eventName')
        }
        else if (this.state.page === 'CloseEvent') {
            const lat = this.state.id.geolocation.lat;
            const lng = this.state.id.geolocation.lng;
            const eventName = this.state.id.name;
            return (
                <div>
                    <h2>Please pick your event's location</h2>
                    <CloseEventMap lat={lat} lng={lng} eventName={eventName}/>
                </div>
            );

        } else if (this.state.page === 'LostObjects') {
        }
        else if (this.state.page === 'eventJoin') {
            if (this.state.id){
                const lat = this.state.id.geolocation.lat;
                const lng = this.state.id.geolocation.lng;
                const eventName = this.state.id.name;
                return (
                    <div>
                        <h2>Please pick your event's location</h2>
                        <CloseEventMap lat={lat} lng={lng} eventName={eventName}/>
                    </div>
                );
            }
        }
        else if (this.state.page === 'LostObjects'){
            return (<div>
                <h2>Lost objects..</h2>
                <CarouselObjects/>
            </div>)
        } else if (this.state.page === 'WeatherPage') {
            return (
                <div>
                    <h2>Weather Page..</h2>
                </div>
            );
        } else if (this.state.page == "twinPage") {
            return (
                <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
                    <div
                        className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e ">
                        <h3 className="tbk__title ">TWIN BRANCH (Web and Internet Technologies) </h3><span
                        className="tbk__symbol "><span/></span>
                        <div className="tbk__text">
                        </div>
                    </div>
                    <div className="adbox video eluid56e1df16 "><img className="adbox-img"
                                                                     src="http://41.226.11.246/wp-content/uploads/2016/07/TWIN.jpg"
                                                                     alt title/>
                        <div className="video_trigger_wrapper">
                            <div className="adbox_container"><a className="playVideo" data-lightbox="iframe"
                                                                href="https://www.youtube.com/watch?v=mbHybO2G1T0"/><h5
                                className="adbox-title kl-font-alt">TWIN : Technologies du Web et de l’INternet </h5>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }
        else if(this.state.page == "glPage"){
            return (
              <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
              <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e "><h3 className="tbk__title ">GL : Software Engineering</h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                </div></div>
              <div className="adbox video eluid56e1df16 "><img className="adbox-img" src="http://41.226.11.246/wp-content/uploads/2016/07/GL.jpg" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=uC5Zga6GDGU" /><h5 className="adbox-title kl-font-alt">TWIN : Technologies du Web et de l’INternet </h5></div></div></div>			</div>
            
               
            );
          }
          else if(this.state.page == "biPage"){
            return (
              <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
              <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e "><h3 className="tbk__title ">ERP/BUSINESS INTELLIGENCE</h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                </div></div>
              <div className="adbox video eluid56e1df16 "><img className="adbox-img" src="http://41.226.11.246/wp-content/uploads/2016/07/ERP.jpg" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=_yEeNDuENfI" /><h5 className="adbox-title kl-font-alt">BI</h5></div></div></div>			</div>
            
               
            );
          }
          else if(this.state.page == "nidsPage"){
            return (
             <div>
              <div className="eluidf2c78813   col-md-6 col-sm-6   zn_sortable_content zn_content " data-droplevel={2}>
                <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluid7bad52e4 "><h3 className="tbk__title ">Nids Branch : Security</h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                  </div></div>
                <div className="adbox video eluidbc7f8097 "><img className="adbox-img" src="http://esprit.tn/wp-content/uploads/2016/07/Sans-titre.png" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=IbzVf7ZMtKM" /><h5 className="adbox-title kl-font-alt">NIDS : Network Infrastructure and Data Security </h5></div></div></div>			</div>
              <div className="eluidd6dca7c7   col-md-12 col-sm-12   zn_sortable_content zn_content " data-droplevel={2}>
              </div>
            </div>

               
            );
          }
          else if(this.state.page == "arcticPage"){
            return (
              <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
              <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e "><h3 className="tbk__title ">ArcTIC : Cloud Computing </h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                </div></div>
              <div className="adbox video eluid56e1df16 "><img className="adbox-img" src="http://esprit.tn/wp-content/uploads/2016/07/Sans-titre-f.jpg" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=-BOpcwXNc1k" /><h5 className="adbox-title kl-font-alt">ARCTIC : Cloud Computing</h5></div></div></div>			</div>
            
               
            );
          }
          else if(this.state.page == "infiniPage"){
            return (
              <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
              <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e "><h3 className="tbk__title ">INFINI</h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                </div></div>
              <div className="adbox video eluid56e1df16 "><img className="adbox-img" src="http://41.226.11.246/wp-content/uploads/2016/07/InFini.jpg" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=_c2Wa22vt9Q" /><h5 className="adbox-title kl-font-alt">INFINI</h5></div></div></div>			</div>
            
               
            );
          }
          else if(this.state.page == "simPage"){
            return (
              <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
              <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e "><h3 className="tbk__title ">SIM BRANCH : Mobile</h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                </div></div>
              <div className="adbox video eluid56e1df16 "><img className="adbox-img" src="http://esprit.tn/wp-content/uploads/2016/07/Sans-titre-sim.jpg" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=KAOo8Z0d-5A" /><h5 className="adbox-title kl-font-alt">SIM BRANCH : Mobile</h5></div></div></div>			</div>
            
               
            );
          }
          else if(this.state.page == "sleamPage"){
            return (
              <div className="eluid89cc2067   col-sm-8    zn_sortable_content zn_content " data-droplevel={2}>
              <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line_border  tbk-icon-pos--after-title eluide93b096e "><h3 className="tbk__title ">SLEAM : Ambient and Embedded Systems</h3><span className="tbk__symbol "><span /></span><div className="tbk__text">
                </div></div>
              <div className="adbox video eluid56e1df16 "><img className="adbox-img" src="http://esprit.tn/wp-content/uploads/2016/07/Sans-titre-1.jpg" alt title /><div className="video_trigger_wrapper"><div className="adbox_container"><a className="playVideo" data-lightbox="iframe" href="https://www.youtube.com/watch?v=0AVMG6xK91I" /><h5 className="adbox-title kl-font-alt">SLEAM : Ambient and Embedded Systems </h5></div></div></div>			</div>
            
               
            );
          }

          else if(this.state.page =="RelatedStudentsPage"){
            return(
              <StudentStory/>
            )
          }
          else if (this.state.page== "safe_route_page"){
              return (
                  <React.Fragment>
                       <VerticalTimeline>
                          
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: 'rgb(43, 42, 42)', color: '#fff' }}
                >
                 <a href='#' onClick={() =>this.handleSafe("stay")}>
                  <h3 className="vertical-timeline-element-title">Safe Approach</h3>
                  <h4 className="vertical-timeline-element-subtitle">Staying at the company without taking risks</h4>
                  <p>
                    You feel comfortable at the company with a fixed salary and do not want to start something new and risky .
                  </p>
                  </a>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: 'rgb(43, 42, 42)', color: '#fff' }}
                >
                  <a href='#' onClick={() =>this.handleSafe("leave")}>
                  <h3 className="vertical-timeline-element-title">Risky Approach</h3>
                  <h4 className="vertical-timeline-element-subtitle">Leaving the company for a new adventure</h4>
                  <p>
                    You seek a new adventure and do not mind risking the your fixed salary and stable life . Want to be the boss and not the way around
                  </p>
                  </a>

                </VerticalTimelineElement>

            </VerticalTimeline>
                  <button onClick={() =>this.handleSafe("stay")}> Stay</button>
                  <button onClick={() =>this.handleSafe("leave")}> Leave</button>
                  </React.Fragment>
              )
          }

    }

    render() {
        const messages = this.state.messages.map((message, index) => {

            if (message.from === 'Me') {

                return <div className="row message-body">
                    <div className="col-sm-12 message-main-receiver pull-right">
                        <div className="sender">
                            <div class="message-text">


                                {message.body.msg ? message.body.msg : message.body}

                            </div>
                            <span className="message-time pull-right">
                        </span>
                        </div>
                    </div>
                </div>
            } else if (message.from === 'robot') {

                return <div className="row message-body">
                    <div className="col-sm-12 message-main-receiver">
                        <div className="receiver">
                            <div class="message-text">

                                {message.body.msg ? message.body.msg : message.body}
                            </div>
                            <span className="message-time pull-left">
                        </span>
                        </div>
                    </div>
                </div>
            }


        })

        return (
            <div>

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
                        <textarea className="form-control" rows="2" id="comment"
                                  onKeyUp={this.handleSubmit}></textarea>
                            </div>
                            <div className="col-sm-2 col-xs-2 reply-recording">
                                <i className="fa fa-microphone fa-2x" aria-hidden="true" id="microphone-send"></i>
                            </div>
                            <div className="col-sm-2 col-xs-2 reply-send">
                                <i className="fa fa-send fa-2x" aria-hidden="true" id="chat-send"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 ">
                        {this.according_to_context()}
                    </div>
                </div>

            </div>
            // </div>


        );
    }
}

export default Home;