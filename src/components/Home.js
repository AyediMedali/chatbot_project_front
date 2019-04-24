import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './css/style.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            page: ""
        }


    }

    componentDidMount() {
        this.socket = socketIOClient('http://localhost:3000/');
        this.socket.on('ai response', function (response) {
            // console.log("response")

            // console.log(response)
            // this.setState({page:response.page})

            const msg = {
                body: response,
                from: 'robot'
            }
            console.log(msg.body.msg + " message")
            console.log(msg.body.page + " page name")
            // this.state = {messages : []}
            // console.log(this.state)
            //  console.log(this.state.messages)

            // if(msg.body!="")
            // {
            this.setState({messages: [...this.state.messages, msg]})
            this.setState({page: response.page})
            // }


            // console.log(this.state.messages)

        }.bind(this))
    }

    handleSubmit = event => {
        const body = event.target.value
        console.log(body.replace(/\s/g, '').length)
        if (event.keyCode === 13 && body.replace(/\s/g, '').length) {
            const message = {
                body,
                from: 'Me'
            }
            console.log(this.state)

            this.setState({messages: [...this.state.messages, message]})
            this.socket.emit('chat request', body)
            event.target.value = ''
        }
    }

    according_to_context() {


        if (this.state.page == '' || this.state.page == undefined) return <h2>Welcome to ESPRIT Chatbot</h2>
        else if (this.state.page == 'ExamPage') {
            return (
                <div>
                    <section className="zn_section eluid8e08112b     section--no " id="eluid8e08112b">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                <div className="eluida6ec04cb   col-md-8 col-sm-8   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="kl-title-block clearfix tbk--text-light tbk--center text-center tbk-symbol--  tbk-icon-pos--after-title eluid287cfbca ">
                                        <h3 className="tbk__title "> EXAMS' CALENDAR / CONTROL SESSION 2017/2018
                                        </h3></div>
                                </div>

                            </div>
                        </div>

                    </section>
                    <section className="zn_section eluid09b380cb     section--no " id="eluid09b380cb">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                <div className="eluid43108e60   col-md-4 col-sm-4    zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="callout-banner clearfix eluidcdc4b30a  calloutbanner--light element-scheme--light">
                                        <div className="row">
                                            <div className="col-sm-10"><h3
                                                className="m_title m_title_ext text-custom callout-banner-title">GHAZELA</h3>
                                                <p>Exams' calendar</p></div>
                                            <div className="col-sm-2"><a
                                                href="http://esprit.tn/wp-content/uploads/2018/06/Map_dsex1718_sr_ghazala-1.pdf"
                                                data-size="" data-position="top-left" data-align="right"
                                                className="circlehover with-symbol kl-main-bgcolor kl-main-bgcolor-before style1"
                                                target="_blank"><span
                                                className="text circlehover-text u-trans-all-2s">Download</span><span
                                                className="symbol circlehover-symbol u-trans-all-2s"><img
                                                className="circlehover-symbol-img"
                                                src="http://esprit.tn/wp-content/uploads/2016/04/favicon-1.png" alt=""
                                                title=""/></span>
                                                <div className="triangle circlehover-symbol-trg"><span
                                                    className="play-icon"></span></div>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>

                                {/*<div className="eluid905803f2   col-md-2 col-sm-2   zn_sortable_content zn_content "*/}
                                     {/*data-droplevel="2">*/}
                                {/*</div>*/}

                                <div className="eluid622aae47   col-md-4 col-sm-4    zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="callout-banner clearfix eluiddba2242b  calloutbanner--light element-scheme--light">
                                        <div className="row">
                                            <div className="col-sm-10"><h3
                                                className="m_title m_title_ext text-custom callout-banner-title">CHARGUIA</h3>
                                                <p>Exams' calendar</p></div>
                                            <div className="col-sm-2"><a
                                                href="http://esprit.tn/wp-content/uploads/2018/06/Map_dsex1718_sr_charguia.pdfhttp://esprit.tn/wp-content/uploads/2018/06/Map_dsex1718_sr_charguia-1.pdf"
                                                data-size="" data-position="top-left" data-align="right"
                                                className="circlehover with-symbol kl-main-bgcolor kl-main-bgcolor-before style1"
                                                target="_blank"><span
                                                className="text circlehover-text u-trans-all-2s">Download</span><span
                                                className="symbol circlehover-symbol u-trans-all-2s"><img
                                                className="circlehover-symbol-img"
                                                src="http://esprit.tn/wp-content/uploads/2016/04/favicon-1.png" alt=""
                                                title=""/></span>
                                                <div className="triangle circlehover-symbol-trg"><span
                                                    className="play-icon"></span></div>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                    <section className="zn_section eluideed4062d     section--no " id="eluideed4062d">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                {/*<div className="eluid259a07e1   col-md-12 col-sm-12   zn_sortable_content zn_content "*/}
                                {/*data-droplevel="2">*/}
                                {/*<div*/}
                                {/*className="kl-title-block clearfix tbk--text-light tbk--left text-left tbk-symbol--  tbk-icon-pos--after-title eluid87ff3b20 ">*/}
                                {/*<h3 className="tbk__title ">INTERNAL REGULATIONS*/}

                                {/*</h3></div>*/}
                                {/*</div>*/}

                                <div className="eluida6ec04cb   col-md-8 col-sm-8   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="kl-title-block clearfix tbk--text-light tbk--center text-center tbk-symbol--  tbk-icon-pos--after-title eluid287cfbca ">
                                        <h3 className="tbk__title "> INTERNAL REGULATIONS
                                        </h3></div>
                                </div>

                            </div>
                        </div>

                    </section>
                    <section className="zn_section eluiddfd543cc     section--no " id="eluiddfd543cc">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                <div className="eluidefbbfb5f   col-md-4 col-sm-4   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="callout-banner clearfix eluid7cea469a  calloutbanner--light element-scheme--light">
                                        <div className="row">
                                            <div className="col-sm-10"><h3
                                                className="m_title m_title_ext text-custom callout-banner-title">DURING
                                                THE
                                                <br/>
                                                CONDUCT
                                                TESTS</h3></div>
                                            <div className="col-sm-2"><a
                                                href="http://esprit.tn/wp-content/uploads/2018/05/Réglement_etud-.pdf"
                                                data-size="" data-position="top-left" data-align="right"
                                                className="circlehover with-symbol kl-main-bgcolor kl-main-bgcolor-before style1"
                                                target="_blank"><span
                                                className="text circlehover-text u-trans-all-2s">Download</span><span
                                                className="symbol circlehover-symbol u-trans-all-2s"><img
                                                className="circlehover-symbol-img"
                                                src="http://esprit.tn/wp-content/uploads/2016/04/favicon-1.png" alt=""
                                                title=""/></span>
                                                <div className="triangle circlehover-symbol-trg"><span
                                                    className="play-icon"></span></div>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                    <div className="itemComments kl-blog-item-comments">
                        <a href="http://esprit.tn/en-video-le-bal-des-projets-20162017-ecole-ingenieur-tunisie/"
                           className="kl-blog-item-comments-link kl-font-alt">published : 2018/2019</a>
                    </div>
                </div>
            );

        }
        else if (this.state.page == 'PfePage') {
            return (
                <div >
                    <section className="zn_section eluid906c0683     section--no " id="eluid906c0683">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                <div className="eluidc861bedf   col-md-8 col-sm-   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line  tbk-icon-pos--after-title eluid68509d28 ">
                                        <h3 className="tbk__title ">Internships </h3><span
                                        className="tbk__symbol "><span></span></span><h4 className="tbk__subtitle">The
                                        internship
                                        is an essential moment of learning for a future engineer.</h4>
                                        <div className="tbk__text"><p>During their university studies, students are
                                            at least one internship "worker" in the first cycle, an internship
                                            "technician" in 2nd cycle and a PFE internship in 5th year.</p>
                                            <p>1- A "worker" internship of a minimum duration of two weeks during the
                                                holidays, validated following the submission of the internship journal
                                                bearing the stamp and
                                                company signature at the internship department.</p>
                                            <p>This internship "worker" must be carried out from the 1st year and before
                                                the
                                                main session of the 3rd year. This internship validates 2 ECTS in the
                                                plan
                                                of the 3rd year.</p>
                                            <p>2- A "technician" internship of a minimum duration of one month during
                                                the holidays
                                                summer school, validated by a committee of ESPRIT teachers following a
                                                interview. An internship journal bearing the stamp and signature of
                                                the company must be registered with the internship department in
                                                September
                                                university before September 30th.</p>
                                            <p>This internship "technician" must be realized from the admission in 4th
                                                year
                                                and before the main session of the 5th year which validates 3 ECTS in
                                                the
                                                study plan of the 5th year.</p>
                                            <p>3- An internship for the end of studies project (PFE) lasting 6 months
                                                during the second half of the 5th year. This course validates 32
                                                ECTS.</p>
                                            <p><strong>PS:</strong></p>
                                            <p>- All documents relating to worker and technician internships
                                                internship, internship application, internship agreement, etc) you will
                                                find them under
                                                the student area <a href="http://stage.esprit.tn/" target="_blank"
                                                                    rel="noreferrer noopener"
                                                                    data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://stage.esprit.tn&amp;source=gmail&amp;ust=1527946127253000&amp;usg=AFQjCNGFCXliNQXmBlQGJJRRJKVFGPMNAQ">http://stage.esprit.
                                                    <wbr/>
                                                    tn</a></p>
                                            <p>- All documents related to PFE internships (internship agreement, PFE
                                                file)
                                                and their validations will be managed under the student area<a
                                                    href="http://pfe.esprit.tn/" target="_blank"
                                                    rel="noreferrer noopener"
                                                    data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://pfe.esprit.tn&amp;source=gmail&amp;ust=1527946127253000&amp;usg=AFQjCNGDq8IaxvgFzI393v-04i38dSfwQw">http://pfe.esprit.tn</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                    <section className="zn_section eluid40f913c3     section--no " id="eluid40f913c3">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                {/*<div className="eluid804a12d4   col-md-2 col-sm-2   zn_sortable_content zn_content "*/}
                                     {/*data-droplevel="2">*/}
                                {/*</div>*/}

                                <div className="eluidea8dc082   col-md-8 col-sm-8   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <h3 className="m_title m_title_ext text-custom stepbox3-elm-title">The stages of
                                        PFE </h3>
                                    <div
                                        className="step-boxes-3 stepbox3 eluid823a0afd  stepsbox3--light element-scheme--light">
                                        <div className="process_box stepbox3-box u-trans-all-2s " data-align="left">
                                            <div className="number stepbox3-number kl-font-alt"><span
                                                className="stepbox3-number-sp">01</span></div>
                                            <div className="content stepbox3-content"><h4
                                                className="stp_title stepbox3-title">Validation of the subject</h4>
                                                <div className="stepbox3-desc">The student enters his / her PFE file on
                                                    the system
                                                    dedicated in this regard on <a
                                                        href="http://196.203.216.18:8080/gestion-pfe/login.jsf">ce
                                                        lien</a> the form goes through a validation workflow: the
                                                    management
                                                    internship, the validation committee composed by several teachers
                                                    and
                                                    chaired by the pedagogical leaders of the IEPs, and finally the
                                                    supervisor
                                                    company which validates the form if it has been modified on
                                                    request of the validation committee.
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="process_box stepbox3-box u-trans-all-2s " data-align="right">
                                            <div className="number stepbox3-number kl-font-alt"><span
                                                className="stepbox3-number-sp">02</span></div>
                                            <div className="content stepbox3-content"><h4
                                                className="stp_title stepbox3-title">Supervising assignment</h4>
                                                <div className="stepbox3-desc">Department heads then assign
                                                    supervising teachers.
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="process_box stepbox3-box u-trans-all-2s " data-align="left">
                                            <div className="number stepbox3-number kl-font-alt"><span
                                                className="stepbox3-number-sp">03</span></div>
                                            <div className="content stepbox3-content"><h4
                                                className="stp_title stepbox3-title">Report Deposit</h4>
                                                <div className="stepbox3-desc">At the end of the internship, the student
                                                    engineer deposits
                                                    his PFE file to validate his internship. The deposits of the PFE
                                                    files are
                                                    planned during the 1<sup>st</sup> week of the month of June,
                                                    July, September, January and April. The file must have 4 copies
                                                    of the PFE internship report as well as the source code, if it is
                                                    not
                                                    confidential, and a poster. To be able to file, the student engineer
                                                    should have the approval of his company supervisors and
                                                    ESPRIT.
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="process_box stepbox3-box u-trans-all-2s " data-align="right">
                                            <div className="number stepbox3-number kl-font-alt"><span
                                                className="stepbox3-number-sp">04</span></div>
                                            <div className="content stepbox3-content"><h4
                                                className="stp_title stepbox3-title">Assignment Rerporter </h4>
                                                <div className="stepbox3-desc">Course management appoints a reporter
                                                    to evaluate the project carried out by the student engineer.
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="process_box stepbox3-box u-trans-all-2s last" data-align="left">
                                            <div className="number stepbox3-number kl-font-alt"><span
                                                className="stepbox3-number-sp">05</span></div>
                                            <div className="content stepbox3-content"><h4
                                                className="stp_title stepbox3-title">Defense planning </h4>
                                                <div className="stepbox3-desc">The course management then plans the
                                                    defenses before the jury, PFE courses validate 30 ECTS.
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>

                    <section className="zn_section eluidb6b46771     section--no " id="eluidb6b46771">


                        <div className="zn_section_size container">
                            <div className="row zn_columns_container zn_content " data-droplevel="1">


                                <div className="eluid303af9d8   col-md-8 col-sm-8   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluidc87c1f73 ">
                                        <h3 className="tbk__title ">Help with finding internships </h3><span
                                        className="tbk__symbol "><span></span></span>
                                        <div className="tbk__text"><p>In order to help students find internships, the
                                            management of the internships animates "the days of the company" with two
                                            main appointments:</p>
                                            <ul>
                                                <li>From September to December Wednesday-afternoon: one to three
                                                    companies
                                                    are invited to meet students. They present them their
                                                    activities and the IEPs to be filled.
                                                </li>
                                                <li>In May, the management of internships invites companies for a
                                                    "Open Day" in the ESPRIT hall to meet the
                                                    students and interview them for summer internships
                                                    technicians).
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="eluid4d4ed940   col-md-5 col-sm-5   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div className="zn_text_box eluid29ccedf8  zn_text_box-light element-scheme--light">
                                        <p>But often companies send an email to the Director of Internships in order to
                                            propose one or more courses, give the specifications, the proposal
                                            is then distributed to students.</p>
                                        <p>It is also possible to do an internship abroad. Among them, 115 realize
                                            their IEPs abroad, or 18%, and are distributed as follows (the countries are
                                            in alphabetical order):</p>
                                        <p>The countries in which these courses take place are very diverse: almost all
                                            the continents are concerned:</p>
                                        <p><strong>Europe :</strong> Germany, Belgium, Denmark, France, Netherlands,
                                            Romania, United Kingdom, Slovakia, Switzerland, Turkey.</p>
                                        <p><strong>North and South America:</strong> Brazil, Canada, United States.</p>
                                        <p><strong>Africa:</strong> Egypt, Chad.</p>
                                        <p><strong>Asia :</strong> India, Malaysia.</p>
                                    </div>
                                </div>


                                <div className="eluid94ac302b   col-md-3 col-sm-3   zn_sortable_content zn_content "
                                     data-droplevel="2">
                                    <div
                                        className="team_member team-member u-trans-all-2s eluid7d3ae0ee  teambox--light element-scheme--light teambox-style--hover">
                                        <a href="#" className="grayHover team-member-link" target="_self"><img
                                            className="team-member-img"
                                            src="http://esprit.tn/wp-content/uploads/2016/06/nabil_jguirim-360x180.jpeg"
                                            width="360" height="180" alt="" title=""/></a><h4
                                        className="team-member-name">Nabil Jguirim</h4><h6
                                        className="team-member-pos">Internships' Director</h6>
                                        <div className="details team-member-details">
                                            <div className="desc team-member-desc"><p>nabil.jguirim@esprit.tn</p></div>
                                            <ul className="social-icons sc--colored fixclear">
                                                <li className="social-icons-li"><a data-zniconfam="kl-social-icons"
                                                                                   data-zn_icon=""
                                                                                   href="https://www.linkedin.com/in/nabil-jguirim-333a2a23"
                                                                                   target="_blank" title="LinkedIn"
                                                                                   className="social-icons-item sctb-icon-ue828"></a>
                                                </li>
                                                <li className="social-icons-li"><a data-zniconfam="kl-social-icons"
                                                                                   data-zn_icon=""
                                                                                   href="https://www.facebook.com/nabiljguirim.esprit"
                                                                                   target="_blank" title="facebook"
                                                                                   className="social-icons-item sctb-icon-ue83f"></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>


                    <div className="itemComments kl-blog-item-comments">
                        <a href="http://esprit.tn/en-video-le-bal-des-projets-20162017-ecole-ingenieur-tunisie/"
                           className="kl-blog-item-comments-link kl-font-alt">published : 2018/2019</a>
                    </div>
                </div>
            );
        }
        else if(this.state.page == 'SkillsPage')
        {
            return (
                <div>
                    <h2>Your skills are..</h2>
                </div>
            );
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