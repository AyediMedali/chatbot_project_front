import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './css/style.css';
import Map from "./Events/Map";

import DynamicContextExams from './DynamicContextExams';
import DynamicContextInternalRegulations from './DynamicContextInternalRegulations';
import CloseEventMap from "./Events/CloseEventMap";
import CarouselObjects from "./lostObjects/Carousel";

import DormDetails from './DynamicDormDetails' ;
import DormAvailability from './DynamicDormAvailabilty' ;
import DormPrices from './DynamicDormPrices' ;
import Reservation from './DynamicReservation' ;
import RestaurantDetails from './DynamicRestaurantDetails';
import RestaurantTimetable from './DynamicRestaurantTimetable' ;
import RestaurantPrices from './DynamicRestaurantPrices';

import {Button} from "react-bootstrap";
import StudentStory from './Branches/StudentStory' ;
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Carousal from "./Clubs/Carousal";



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            page: "",
            skills: [],
            best_pfe: [],
            exams: [],
            reservation : [],
            email:'',
            score:0,
            display: 'none',
            buttonValue: 'Display Exams Calendar',
            id: ''
        }


    }

    componentDidMount() {
        this.socket = socketIOClient('http://localhost:3000/');
        this.socket.on('ai response', function (response) {

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
                       // console.log(res)

                     //   console.log(res.user.exams)

                        if (this.state.page == 'SkillsPage') {
                            this.setState({skills: res.user.skills})
                        } else if (this.state.page == 'PfePage') {
                            console.log(res.user.internships)
                            this.setState({best_pfe: res.user.internships})
                        }
                        if (this.state.page == 'ExamPage') {
                            this.setState({exams: res.user.exams})
                        }

                    });
            }
            else if (this.state.page==='EmailPage'){

                    this.setState({email: response.email})
            }
            else if (this.state.page==='quizPage'){
                console.log(this.state.email)
                fetch('http://localhost:3000/quizQ/get_user_score_by_mail/'+this.state.email)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        this.setState({score:res.score})

                    });

            }

        }.bind(this))
    }


    update_score_color(score){
        if(Number(score)>69){
            return ( <div>Your quiz score is :<p style={{color : "green"}}>{score}%</p></div>)
        }else if(Number(score)<70&&Number(score)>39){
            return ( <div>Your quiz score is :<p style={{color : "orange"}}>{score}%</p></div>)
        }else if(Number(score)<40){
            return ( <div>Your quiz score is :<p style={{color : "red"}}>{score}%</p></div>)
        }
    }


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


    to_date_function(date){
        var date2 = new Date(date);
        console.log('date ='+date);
        console.log('date ='+date2);
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(date2)

        return date
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
                background: '#ce1f0c',
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

                var fieldsetStyle = {  'border-radius':'10px', color:"white", 'background-color':'#ce1f0c'}
                var legendStyle = {
                    padding: "0.2em 0.5em",
                      color:"white",
                    "font-size":"90%",
                    'text-align':'center',
                    'background-color':'#ce1f0c',
                    'border-radius':'10px'
                }
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

                        <div style={{display: this.state.display}}>
                            <DynamicContextExams/>
                        </div>


                        <div>
                            {items.map(item => (


                                <div className="col-sm-8"  key={item._id}>
                                    <br/>

                                    <section className="   section--no " id="eluid1e6a7716">
                                        <div className="zn_section_size container">
                                            <div className="row zn_columns_container zn_content " data-droplevel={1}>
                                                <div className="eluid00a9d24a   col-md-8 col-sm-8   zn_sortable_content zn_content " data-droplevel={2}>
                                                    <div className="action_box eluide80e654a  actionbox--light style1" data-arrowpos="center">
                                                        <div className="action_box_inner action_box-inner">
                                                            <div className="action_box_content action_box-content">
                                                                <div className="ac-content-text action_box-text">
                                                                {/*<h4 className="text action_box-title">COMPUTER SCIENCE AND COMMUNICATION: 1st and 2nd Cycle</h4>*/}
                                                                {/*<h5 className="ac-subtitle action_box-subtitle">information and communication technologies </h5>*/}
                                                                <ul >
                                                                    <li className="text action_box-title" > Subject:
                                                                        {item.exam_subject.name}
                                                                    </li>
                                                                    <li className="ac-subtitle action_box-subtitle" > Exam type : {item.exam_type} </li>
                                                                    <li className="ac-subtitle action_box-subtitle"> Coef : {item.coef}</li>
                                                                    <li className="ac-subtitle action_box-subtitle"> Passing date : {item.passing_date} </li>
                                                                    <li className="ac-subtitle action_box-subtitle"> Passing way : {item.passing_way} </li>
                                                                    <li className="ac-subtitle action_box-subtitle"> Old exmas : {item.url_drive} </li>
                                                                </ul>
                                                                </div>
                                                                <div className="ac-buttons action_box-buttons"><a href="#" className="btn ac-btn action_box-button action_box-button-first btn-lined btn-skewed" target="_self">

                                                                    {this.to_date_function(item.passing_date)}
                                                                </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>

                            ))}

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
                        <div className="row">
                            {items.map(item => (


                                <div className="col-sm-8" key={item._id}>



                                    <br/>

                                    <section className="   section--no " id="eluid1e6a7716">
                                        <div className="zn_section_size container">
                                            <div className="row zn_columns_container zn_content " data-droplevel={1}>
                                                <div className="eluid00a9d24a   col-md-8 col-sm-8   zn_sortable_content zn_content " data-droplevel={2}>
                                                    <div className="action_box eluide80e654a  actionbox--light style1" data-arrowpos="center">
                                                        <div className="action_box_inner action_box-inner">
                                                            <div className="action_box_content action_box-content">
                                                                <div className="ac-content-text action_box-text">
                                                                    {/*<h4 className="text action_box-title">COMPUTER SCIENCE AND COMMUNICATION: 1st and 2nd Cycle</h4>*/}
                                                                    {/*<h5 className="ac-subtitle action_box-subtitle">information and communication technologies </h5>*/}
                                                                    <ul >
                                                                        <li className="text action_box-title" > Entreprise:
                                                                            {item.entreprise}
                                                                        </li>
                                                                        <li className="ac-subtitle action_box-subtitle" > Description: {item.description} </li>
                                                                        <li className="ac-subtitle action_box-subtitle" > Skills: {item.skills[0].title} </li>
                                                                        <li className="ac-subtitle action_box-subtitle"> Profile request : {item.profile_request}</li>
                                                                        <li className="ac-subtitle action_box-subtitle"> Start date : {item.start_date} </li>
                                                                        <li className="ac-subtitle action_box-subtitle"> End date : {item.end_date} </li>
                                                                        <li className="ac-subtitle action_box-subtitle"> Location : {item.location} </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="ac-buttons action_box-buttons"><a href="#" className="btn ac-btn action_box-button action_box-button-first btn-lined btn-skewed" target="_self">
                                                                    {item.location}
                                                                </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>

                            ))}
                        </div>
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

                        <div className="eluidf6808580   col-md-6 col-sm-6   zn_sortable_content zn_content "
                             data-droplevel="2">
                            <div
                                className="services_box eluid12966c35  servicebox-sch--light element-scheme--light services_box--modern sb--hasicon">
                                <div className="services_box__inner clearfix">
                                    <div className="services_box__icon">
                                        <div className="services_box__icon-inner"><span
                                            data-zniconfam="glyphicons_halflingsregular" data-zn_icon=""
                                            className="services_box__fonticon text-custom"></span></div>
                                    </div>
                                    <div className="services_box__content"><h4
                                        className="services_box__title element-scheme__hdg1 ">Knowledge has a beginning but no end. </h4>
                                        <div className="services_box__desc"><p>Your Skills :</p></div>
                                        <div className="services_box__list-wrapper"><span
                                            className="services_box__list-bg"></span>

                                            <ul className="services_box__list">
                                                {items.map(item => (
                                                    <li key={item._id}>
                                                        <span className="services_box__list-text">
                                                            {item.title}
                                                        </span>


                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                );
            }
        }

        else if (this.state.page === 'EventPage') {
            const messages = this.state.messages;

            return (
                <div>
                    <h2>Please pick your event's location</h2>
                    <Map eventId={messages}/>
                </div>
            );
        } else if (this.state.page === 'ClubPage') {
            const data = this.state.id;
            return (
                <div>
                    <h2>Clubs directory :</h2>
                    <Carousal data={data}/>
                </div>
            )
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
            const data = this.state.id;
            return (<div>
                <h2>Lost objects..</h2>
                <CarouselObjects data={data}/>
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

        else if(this.state.page === 'RestaurantDetails'){
            return(<RestaurantDetails/>);
        }
        else if(this.state.page === 'RestaurantMeals'){
            return(<RestaurantTimetable/>);
        }else if(this.state.page === 'RestaurantPrices'){
            return(<RestaurantPrices/>) ;
        }
        else if(this.state.page === 'DormDetails'){
            return(<DormDetails/>);
        }
        else if(this.state.page === 'DormAvailabilty'){
            return(<DormAvailability/>) ;
        }
        else if(this.state.page === 'DormPrices'){
            return(<DormPrices/>) ;
        }
        else if (this.state.page == 'quizPage') {
            return <div><h2>{this.update_score_color(this.state.score)}</h2></div>
        }
        else if(this.state.page === 'ReservationDetails'){
            // var items = this.state.reservation;
            return (
                <div>
                    <Reservation/>
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

        );
    }
}

export default Home;