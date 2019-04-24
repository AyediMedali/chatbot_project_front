import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(localStorage.getItem('user') + " constructor")
        console.log(localStorage.getItem('token') + " token constructor")
        this.state = {isLoggedIn: false};
    }

    componentDidMount() {
        if(localStorage.getItem('user') == '' || localStorage.getItem('user') == null)
        {
            this.setState({isLoggedIn:false})
        }
        else {
            this.setState({isLoggedIn:true})
        }
    }


    render() {

        const isLoggedIn = this.state.isLoggedIn;
        const divStyle = {
            top: '190px',

        };
        let button;

        if (isLoggedIn) {
            button =


                <div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right">
                    <div className="fxb fxb-row fxb-row-col fxb-center-y">
                        <div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top">
                            <a href="/logout" id="ctabutton" className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGOUT</strong>INTRANET<svg version="1.1" className="trisvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="none" width="14px" height="5px" viewBox="0 0 14.017 5.006" enableBackground="new 0 0 14.017 5.006" xmlSpace="preserve"><path fillRule="evenodd" clipRule="evenodd" d="M14.016,0L7.008,5.006L0,0H14.016z" /></svg></a>                                  </div>
                    </div>
                </div>



                // <div style={divStyle}
                //      className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right'>
                //     <div className="fxb fxb-row fxb-row-col fxb-center-y">
                //
                //         <div
                //             className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top'>
                //             <a href="/logout" id="ctabutton"
                //                className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGOUT</strong>INTRANET
                //
                //             </a>
                //         </div>
                //     </div>
                // </div>


            {/*<button >*/}
            {/*<a href="/logout">Logout </a>*/}
            {/*</button>*/}
        } else {
            button =


                <div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right">
                    <div className="fxb fxb-row fxb-row-col fxb-center-y">
                        <div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top">
                            <a href="/login" id="ctabutton" className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGIN</strong>INTRANET<svg version="1.1" className="trisvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="none" width="14px" height="5px" viewBox="0 0 14.017 5.006" enableBackground="new 0 0 14.017 5.006" xmlSpace="preserve"><path fillRule="evenodd" clipRule="evenodd" d="M14.016,0L7.008,5.006L0,0H14.016z" /></svg></a>                                  </div>
                    </div>
                </div>

                {/*<div*/}
                    {/*className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right'>*/}
                    {/*<div className="fxb fxb-row fxb-row-col fxb-center-y">*/}

                        {/*<div*/}
                            {/*className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top'>*/}
                            {/*<a href="/login" id="ctabutton"*/}
                               {/*className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGIN</strong>INTRANET*/}

                            {/*</a>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}


            {/*<button>*/}
            {/*<a href="/login">Login </a>*/}
            {/*</button>*/}
        }


        return(
            <React.Fragment>
<header id="header" className="site-header style7 cta_button  header--follow   sticky-resize headerstyle--default site-header--absolute nav-th--light sh--light">
  <div className="kl-header-bg " />    <div className="site-header-wrapper sticky-top-area">
    <div className="kl-top-header site-header-main-wrapper clearfix">
      <div className="container siteheader-container ">
        <div className="fxb-row fxb-row-col-sm">
          <div className="fxb-col fxb-basis-auto">
            <div className="fxb-row site-header-top ">
              <div className="fxb-col fxb fxb-start-x fxb-center-y fxb-basis-auto site-header-col-left site-header-top-left">
                <ul className="sh-component social-icons sc--clean topnav navRight topnav-no-hdnav"><li className="topnav-li social-icons-li"><a href="https://www.facebook.com/esprit.tn/?fref=ts" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" className="topnav-item social-icons-item scheader-icon-" title="Facebook" /></li><li className="topnav-li social-icons-li"><a href="https://twitter.com/Esprit_News?lang=fr" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" className="topnav-item social-icons-item scheader-icon-" title="Twitter" /></li><li className="topnav-li social-icons-li"><a href="https://plus.google.com/+ESPRITEcoleSupPriv%C3%A9edIng%C3%A9nierieetdeTechnologies" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" className="topnav-item social-icons-item scheader-icon-" title="Google+" /></li><li className="topnav-li social-icons-li"><a href="https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" className="topnav-item social-icons-item scheader-icon-" title="Youtube" /></li><li className="topnav-li social-icons-li"><a href="https://www.linkedin.com/company/1146626?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1146626%2Cidx%3A5-2-11%2CtarId%3A1467110950798%2Ctas%3Aesprit" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" className="topnav-item social-icons-item scheader-icon-" title="LinkedIn" /></li></ul><div className="sh-component kl-header-toptext kl-font-alt"><a href="http://en.esprit.tn/" className="fw-bold">EN</a> | <a href="http://esprit.tn/" className="fw-bold">FR</a> </div>                                                                  </div>
              <div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto site-header-col-right site-header-top-right">
                <div id="search" className="sh-component header-search headsearch--def">
                  <a href="#" className="searchBtn header-search-button">
                    <span className="glyphicon glyphicon-search kl-icon-white" />
                  </a>
                  <div className="search-container header-search-container">
                    <form id="searchform" className="gensearch__form" action="http://esprit.tn/" method="get">
                      <input id="s" name="s" defaultValue className="inputbox gensearch__input" type="text" placeholder="Rechercher ..." />
                      <button type="submit" id="searchsubmit" value="go" className="gensearch__submit glyphicon glyphicon-search" />
                    </form>          </div>
                </div>
              </div>
            </div>{/* /.site-header-top */}
            <div className="separator site-header-separator " />
            <div className="fxb-row site-header-main  header-no-bottom ">
              <div className="fxb-col fxb fxb-start-x fxb-center-y fxb-basis-auto fxb-grow-0 fxb-sm-full site-header-col-left site-header-main-left">
                <div id="logo-container" className="logo-container hasInfoCard logosize--yes">
                  {/* Logo */}
                  <h1 className="site-logo logo " id="logo"><a href="http://esprit.tn/" className="site-logo-anch"><img className="logo-img site-logo-img" src="http://esprit.tn/wp-content/uploads/2016/05/logo_esprit_original.png" alt="esprit" title="se former autrement" data-mobile-logo="http://esprit.tn/wp-content/uploads/2016/04/logo_footer.png" /></a></h1>            {/* InfoCard */}
                  <div id="infocard" className="logo-infocard">
                    <div className="custom ">
                      <div className="row">
                        <div className="col-sm-5">
                          <div className="infocard-wrapper text-center">
                            <p><img src="http://esprit.tn/wp-content/uploads/2016/04/logo_footer.png" alt="esprit" /></p>
                            <p>Ecole Supérieure Privée d'Ingénierie et des Technologies</p>
                          </div>
                        </div>
                        <div className="col-sm-7">
                          <div className="custom contact-details">
                            <p>
                              <strong>T (+216) 70 68 56 85</strong><br />
                              Email :&nbsp;<a href="mailto:contact@esprit.tn">contact@esprit.tn</a>
                            </p>
                            <p>
                              ESPRIT<br />Z.I. Chotrana II - B.P. 160 - 2083 Pôle Technologique - El Ghazala                              </p>
                            <a href="https://goo.gl/maps/kXbCmPs6AXr" target="_blank" className="map-link">
                              <span className="glyphicon glyphicon-map-marker kl-icon-white" />
                              <span>Ouvrir dans Google Maps</span>
                            </a>
                          </div>
                          <div style={{height: 20}} />
                          <ul className="social-icons sc--clean"><li className="social-icons-li"><a href="https://www.facebook.com/esprit.tn/?fref=ts" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" title="Facebook" /></li><li className="social-icons-li"><a href="https://twitter.com/Esprit_News?lang=fr" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" title="Twitter" /></li><li className="social-icons-li"><a href="https://plus.google.com/+ESPRITEcoleSupPriv%C3%A9edIng%C3%A9nierieetdeTechnologies" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" title="Google+" /></li><li className="social-icons-li"><a href="https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" title="Youtube" /></li><li className="social-icons-li"><a href="https://www.linkedin.com/company/1146626?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1146626%2Cidx%3A5-2-11%2CtarId%3A1467110950798%2Ctas%3Aesprit" data-zniconfam="kl-social-icons" data-zn_icon="" target="_blank" title="LinkedIn" /></li></ul>                  </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="separator site-header-separator visible-xs" />                          </div>
              <div className="fxb-col fxb fxb-center-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-center site-header-main-center">
                <div className="sh-component main-menu-wrapper">
                  <div className="zn-res-menuwrapper">
                    <a href="#" className="zn-res-trigger zn-header-icon" />
                  </div>{/* end responsive menu */}
                      <div id="main-menu" className="main-nav mainnav--active-bg mainnav--pointer-dash nav-mm--light zn_mega_wrapper "><ul id="menu-menuprincipalesprit" className="main-menu main-menu-nav zn_mega_menu "><li id="menu-item-1894" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1894  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">CHATBOT</a>
                        <ul className="sub-menu clearfix">
                          <li id="menu-item-1895" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1895  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/mot-du-pdg/" className=" main-menu-link main-menu-link-sub">Mot du Président</a></li>
                          <li id="menu-item-1897" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1897  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/valeurs-de-lecole/" className=" main-menu-link main-menu-link-sub">Valeurs de l’école</a></li>
                          <li id="menu-item-1898" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1898  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/les-plus-desprit/" className=" main-menu-link main-menu-link-sub">Les plus d’ESPRIT</a></li>
                          <li id="menu-item-2038" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2038  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="#" className=" main-menu-link main-menu-link-sub">Gouvernance</a>
                            <ul className="sub-menu clearfix">
                              <li id="menu-item-1896" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1896  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/gouvernance/" className=" main-menu-link main-menu-link-sub">Gouvernance stratégique</a></li>
                              <li id="menu-item-1900" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1900  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/services-de-lecole/" className=" main-menu-link main-menu-link-sub">Services de l’école</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-6910" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-6910  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/qualite-et-amelioration-continue/" className=" main-menu-link main-menu-link-sub">Politique Qualité</a></li>
                          <li id="menu-item-5918" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5918  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/partenariats-esprit/" className=" main-menu-link main-menu-link-sub">Partenariats</a></li>
                          <li id="menu-item-4726" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4726  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/brochures-et-logos/" className=" main-menu-link main-menu-link-sub">Salle de Presse</a></li>
                        </ul>
                      </li>
                      <li id="menu-item-1902" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1902  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">ADMISSION</a>
                        <ul className="sub-menu clearfix">

                            <li id="menu-item-1906" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1906  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to="/Restaurant_and_prices" className=" main-menu-link main-menu-link-sub">Restaurant and prices</NavLink></li>
                            <li id="menu-item-7780" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-7780  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to="/Dorm_and_reservations" className=" main-menu-link main-menu-link-sub">Dorm and reservations</NavLink></li>
                            <li id="menu-item-7779" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7779  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to="/Quiz_score" className=" main-menu-link main-menu-link-sub">My quiz score</NavLink></li>
                        </ul>
                      </li>
                      <li id="menu-item-1915" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1915  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">FORMATION</a>
                        <ul className="sub-menu clearfix">

                            <li id="menu-item-1906" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1906  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to={'/internships'} className=" main-menu-link main-menu-link-sub"> Internships  </NavLink></li>
                            <li id="menu-item-7780" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-7780  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to={'/exams'} className=" main-menu-link main-menu-link-sub">Exams</NavLink></li>
                            <li id="menu-item-7779" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7779  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to={'/internal_regulations'} className=" main-menu-link main-menu-link-sub">Internal regulations</NavLink></li>

                        </ul>
                      </li>
                      <li id="menu-item-1926" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1926  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">BRANCHES</a>
                        <ul className="sub-menu clearfix">
                          <li id="menu-item-2276" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2276  main-menu-item-sub  menu-item-odd menu-item-depth-1"><NavLink to={'/branch_list'} className=" main-menu-link main-menu-link-sub">Branches List</NavLink></li>
                          <li id="menu-item-2275" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2275  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/productions/" className=" main-menu-link main-menu-link-sub">Students Success Story</a></li>
                          <li id="menu-item-2274" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2274  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/les-equipes/" className=" main-menu-link main-menu-link-sub">Les équipes</a></li>
                        </ul>
                      </li>
                      <li id="menu-item-1932" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1932  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">ENTREPRISES</a>
                        <ul className="sub-menu clearfix">
                          <li id="menu-item-2248" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2248  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/esprit-entreprise/" className=" main-menu-link main-menu-link-sub">Esprit Entreprise</a></li>
                          <li id="menu-item-2365" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2365  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/stages/" className=" main-menu-link main-menu-link-sub">Stages</a></li>
                          <li id="menu-item-1938" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1938  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/esprit-incubator/" className=" main-menu-link main-menu-link-sub">ESPRIT Incubator</a></li>
                          <li id="menu-item-8815" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-8815  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/esprit-fondation/" className=" main-menu-link main-menu-link-sub">Fondation Esprit</a></li>
                          <li id="menu-item-4985" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4985  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="#" className=" main-menu-link main-menu-link-sub">Esprit Language Center</a>
                            <ul className="sub-menu clearfix">
                              <li id="menu-item-4600" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4600  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/esprit-language-center/" className=" main-menu-link main-menu-link-sub">Présentation</a></li>
                              <li id="menu-item-4986" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4986  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/tef-tefaq/" className=" main-menu-link main-menu-link-sub">TEF &amp; TEFAQ</a></li>
                              <li id="menu-item-6335" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-6335  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/esprit-language-center/aptis-test/" className=" main-menu-link main-menu-link-sub">APTIS TEST</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-9872" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-9872  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/formation-certifiante/" className=" main-menu-link main-menu-link-sub">Formation Certifiante</a></li>
                        </ul>
                      </li>
                      <li id="menu-item-1933" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1933  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">INTERNATIONAL</a>
                        <ul className="sub-menu clearfix">
                          <li id="menu-item-1944" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1944  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/experience-a-linternational/" className=" main-menu-link main-menu-link-sub">Avoir une expérience à l’international</a></li>
                          <li id="menu-item-2160" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2160  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/modalites-dentree/" className=" main-menu-link main-menu-link-sub">Venir à ESPRIT</a></li>
                          <li id="menu-item-2092" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2092  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/temoignages/" className=" main-menu-link main-menu-link-sub">Témoignages</a></li>
                          <li id="menu-item-1947" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1947  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/partenariats/" className=" main-menu-link main-menu-link-sub">Institutions partenaires</a></li>
                        </ul>
                      </li>
                      <li id="menu-item-1934" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1934  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">VIE ETUDIANTE</a>
                        <ul className="sub-menu clearfix">
                          <li id="menu-item-10032" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-10032  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/presentation-2/" className=" main-menu-link main-menu-link-sub">PRESENTATION</a></li>
                          <li id="menu-item-1948" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1948  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="#" className=" main-menu-link main-menu-link-sub">RENTREE SCOLAIRE</a>
                            <ul className="sub-menu clearfix">
                              <li id="menu-item-1951" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1951  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/logement-et-restauration/" className=" main-menu-link main-menu-link-sub">Logement et restauration</a></li>
                              <li id="menu-item-8816" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-8816  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/esprit-fondation/" className=" main-menu-link main-menu-link-sub">Fondation Esprit</a></li>
                              <li id="menu-item-2170" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2170  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/modalites-dentree/" className=" main-menu-link main-menu-link-sub">Inscription</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-1949" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1949  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="#" className=" main-menu-link main-menu-link-sub">VIE SUR CAMPUS</a>
                            <ul className="sub-menu clearfix">
                              <li id="menu-item-2171" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2171  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/infrastructure/" className=" main-menu-link main-menu-link-sub">Infrastructure</a></li>
                              <li id="menu-item-1955" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1955  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/clubs/" className=" main-menu-link main-menu-link-sub">Clubs</a></li>
                              <li id="menu-item-1956" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1956  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/evenements-et-challenges/" className=" main-menu-link main-menu-link-sub">Evénements et Challenges</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-1950" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1950  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="#" className=" main-menu-link main-menu-link-sub">GUIDE ETUDIANT</a>
                            <ul className="sub-menu clearfix">
                              <li id="menu-item-1957" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-1957  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2"><a href="http://esprit.tn/coming-soon/" className=" main-menu-link main-menu-link-sub">TELECHARGER EN PDF</a></li>
                            </ul>
                          </li>
                          <li id="menu-item-10031" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-10031  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/cellule-decoute/" className=" main-menu-link main-menu-link-sub">CELLULE D’ECOUTE</a></li>
                        </ul>
                      </li>
                      <li id="menu-item-1935" className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1935  main-menu-item-top  menu-item-even menu-item-depth-0"><a href="#" className=" main-menu-link main-menu-link-top">ACTUALITES</a>
                        <ul className="sub-menu clearfix">
                          <li id="menu-item-1959" className="main-menu-item menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1959  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/category/evenements-et-challenges/" className=" main-menu-link main-menu-link-sub">Evènements et Challenges</a></li>
                          <li id="menu-item-5917" className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5917  main-menu-item-sub  menu-item-odd menu-item-depth-1"><a href="http://esprit.tn/partenariats-esprit/" className=" main-menu-link main-menu-link-sub">Partenariats</a></li>
                        </ul>
                      </li>
                    </ul></div>      </div>
                {/* end main_menu */}
              </div>
                {button}
                {/*<div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right">*/}
                    {/*<div className="fxb fxb-row fxb-row-col fxb-center-y">*/}
                        {/*<div className="fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top">*/}
                            {/*<a href="http://esprit.tn/espace-intranet/" id="ctabutton" className="sh-component ctabutton kl-cta-ribbon " target="_self"><strong>LOGIN</strong>INTRANET<svg version="1.1" className="trisvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="none" width="14px" height="5px" viewBox="0 0 14.017 5.006" enableBackground="new 0 0 14.017 5.006" xmlSpace="preserve"><path fillRule="evenodd" clipRule="evenodd" d="M14.016,0L7.008,5.006L0,0H14.016z" /></svg></a>                                  </div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>{/* /.site-header-main */}
          </div>
        </div>
      </div>{/* /.siteheader-container */}
    </div>{/* /.site-header-main-wrapper */}
  </div>{/* /.site-header-wrapper */}
</header>

            </React.Fragment>
        );
    }
}

export default Navbar;