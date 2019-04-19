import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    handleLogout = event => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        if (!localStorage.getItem('token'))
            return (
                <div  style={{marginTop: -50, marginBottom: 50}}>

                    <div className="login_register_stuff"></div>
                    <div id="fb-root"></div>
                    <div className="fxb-row site-header-main  header-no-bottom ">

                        <div
                            className='fxb-col fxb fxb-start-x fxb-center-y fxb-basis-auto fxb-grow-0 fxb-sm-full site-header-col-left site-header-main-left'>
                            <div id="logo-container" className="logo-container hasInfoCard logosize--yes">
                                <h1 className='site-logo logo ' id='logo'><a href='http://esprit.tn/'
                                                                             className='site-logo-anch'><img
                                    className="logo-img site-logo-img"
                                    src="http://esprit.tn/wp-content/uploads/2016/05/logo_esprit_original.png"
                                    alt="esprit" title="se former autrement"
                                    data-mobile-logo="http://esprit.tn/wp-content/uploads/2016/04/logo_footer.png"/></a>
                                </h1>

                                <div id="infocard" class="logo-infocard">
                                    <div class="custom ">
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <div class="infocard-wrapper text-center">
                                                    <p>
                                                        <img
                                                            src="http://esprit.tn/wp-content/uploads/2016/04/logo_footer.png"
                                                            alt="esprit"/></p>
                                                    <p>Ecole Supérieure Privée d'Ingénierie et des
                                                        Technologies</p>
                                                </div>
                                            </div>

                                            <div class="col-sm-7">
                                                <div class="custom contact-details">

                                                    <p>
                                                        <strong>T (+216) 70 68 56 85</strong>

                                                        Email :&nbsp;<a
                                                        href="mailto:contact@esprit.tn">contact@esprit.tn</a>
                                                    </p>

                                                    <p>
                                                        ESPRIT Z.I. </p><p>Chotrana II - B.P. 160 - 2083 Pôle
                                                    Technologique - El Ghazala </p>

                                                    <a href="https://goo.gl/maps/kXbCmPs6AXr" target="_blank"
                                                       class="map-link">
                                                        <span
                                                            class="glyphicon glyphicon-map-marker kl-icon-white"></span>
                                                        <span>Ouvrir dans Google Maps</span>
                                                    </a>

                                                </div>


                                                <ul class="social-icons sc--clean">
                                                    <li class="social-icons-li"><a
                                                        href="https://www.facebook.com/esprit.tn/?fref=ts"
                                                        data-zniconfam="kl-social-icons" data-zn_icon=""
                                                        target="_blank" title="Facebook"></a></li>
                                                    <li class="social-icons-li"><a
                                                        href="https://twitter.com/Esprit_News?lang=fr"
                                                        data-zniconfam="kl-social-icons" data-zn_icon=""
                                                        target="_blank" title="Twitter"></a></li>
                                                    <li class="social-icons-li"><a
                                                        href="https://plus.google.com/+ESPRITEcoleSupPriv%C3%A9edIng%C3%A9nierieetdeTechnologies"
                                                        data-zniconfam="kl-social-icons" data-zn_icon=""
                                                        target="_blank" title="Google+"></a></li>
                                                    <li class="social-icons-li"><a
                                                        href="https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA"
                                                        data-zniconfam="kl-social-icons" data-zn_icon=""
                                                        target="_blank" title="Youtube"></a></li>
                                                    <li class="social-icons-li"><a
                                                        href="https://www.linkedin.com/company/1146626?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1146626%2Cidx%3A5-2-11%2CtarId%3A1467110950798%2Ctas%3Aesprit"
                                                        data-zniconfam="kl-social-icons" data-zn_icon=""
                                                        target="_blank" title="LinkedIn"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="separator site-header-separator visible-xs"></div>
                        </div>

                        <div
                            class='fxb-col fxb fxb-center-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-center site-header-main-center'>
                            <div class="sh-component main-menu-wrapper">

                                <div class="zn-res-menuwrapper">
                                    <a href="#" class="zn-res-trigger zn-header-icon"></a>
                                </div>
                                <div id="main-menu" style={{backgroundColor: "#FF0000"}}
                                     class="main-nav mainnav--active-bg mainnav--pointer-dash nav-mm--light zn_mega_wrapper ">
                                    <ul id="menu-menuprincipalesprit"
                                        class="main-menu main-menu-nav zn_mega_menu ">
                                        <li id="menu-item-1894"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1894  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#" class=" main-menu-link main-menu-link-top">ESPRIT</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-1895"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1895  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/mot-du-pdg/"
                                                       class=" main-menu-link main-menu-link-sub">Mot du
                                                        Président</a></li>
                                                <li id="menu-item-1897"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1897  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/valeurs-de-lecole/"
                                                       class=" main-menu-link main-menu-link-sub">Valeurs de
                                                        l&rsquo;école</a>
                                                </li>
                                                <li id="menu-item-1898"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1898  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/les-plus-desprit/"
                                                       class=" main-menu-link main-menu-link-sub">Les plus
                                                        d&rsquo;ESPRIT</a>
                                                </li>
                                                <li id="menu-item-2038"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2038  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#"
                                                       class=" main-menu-link main-menu-link-sub">Gouvernance</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-1896"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1896  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/gouvernance/"
                                                               class=" main-menu-link main-menu-link-sub">Gouvernance
                                                                stratégique</a></li>
                                                        <li id="menu-item-1900"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1900  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/services-de-lecole/"
                                                               class=" main-menu-link main-menu-link-sub">Services
                                                                de l&rsquo;école</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-6910"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-6910  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/qualite-et-amelioration-continue/"
                                                       class=" main-menu-link main-menu-link-sub">Politique
                                                        Qualité</a></li>
                                                <li id="menu-item-5918"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5918  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/partenariats-esprit/"
                                                       class=" main-menu-link main-menu-link-sub">Partenariats</a>
                                                </li>
                                                <li id="menu-item-4726"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4726  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/brochures-et-logos/"
                                                       class=" main-menu-link main-menu-link-sub">Salle de
                                                        Presse</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1902"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1902  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#" class=" main-menu-link main-menu-link-top">ADMISSION</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-1906"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1906  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/inscription-concours-ecole-ingenieur/"
                                                       class=" main-menu-link main-menu-link-sub">Esprit école
                                                        d&rsquo;ingénieurs</a>
                                                </li>
                                                <li id="menu-item-7780"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-7780  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://www.esprit-prepa.com/ADMISSION/Pr%C3%A9inscription.aspx"
                                                       class=" main-menu-link main-menu-link-sub">Esprit-prépa</a>
                                                </li>
                                                <li id="menu-item-7779"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7779  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/inscription-au-concoursesb/"
                                                       class=" main-menu-link main-menu-link-sub">Esprit School
                                                        of Business</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1915"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1915  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#"
                                               class=" main-menu-link main-menu-link-top">FORMATIONS</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-1916"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1916  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">Esprit
                                                        école d&rsquo;ingénieurs</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-2300"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2300  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/presentation/"
                                                               class=" main-menu-link main-menu-link-sub">Présentation</a>
                                                        </li>
                                                        <li id="menu-item-1919"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1919  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/specialites/"
                                                               class=" main-menu-link main-menu-link-sub">Spécialités
                                                                et Options</a></li>
                                                        <li id="menu-item-1921"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1921  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/stages/"
                                                               class=" main-menu-link main-menu-link-sub">Stages</a>
                                                        </li>
                                                        <li id="menu-item-2296"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2296  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/langues-et-developpement-personnel/"
                                                               class=" main-menu-link main-menu-link-sub">Langues
                                                                et dév personnel</a></li>
                                                        <li id="menu-item-7442"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7442  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/formation-des-formateurs/"
                                                               class=" main-menu-link main-menu-link-sub">Formation
                                                                des formateurs</a></li>
                                                        <li id="menu-item-1920"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1920  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/reglement-scolaire/"
                                                               class=" main-menu-link main-menu-link-sub">Réglement
                                                                scolaire</a></li>
                                                        <li id="menu-item-7441"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7441  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/calendrier-des-examens/"
                                                               class=" main-menu-link main-menu-link-sub">Calendrier
                                                                des examens-Session de rattrapage 2017/2018</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-4601"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4601  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">Esprit
                                                        School of Business</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-4612"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4612  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esb-presentation/"
                                                               class=" main-menu-link main-menu-link-sub">Présentation</a>
                                                        </li>
                                                        <li id="menu-item-4611"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4611  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esb-specialites/"
                                                               class=" main-menu-link main-menu-link-sub">Spécialités</a>
                                                        </li>
                                                        <li id="menu-item-4610"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4610  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esb-reglement-scolaire/"
                                                               class=" main-menu-link main-menu-link-sub">Règlement
                                                                scolaire</a></li>
                                                        <li id="menu-item-4892"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4892  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esb-inscription/"
                                                               class=" main-menu-link main-menu-link-sub">Inscription</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-1917"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1917  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#"
                                                       class=" main-menu-link main-menu-link-sub">Esprit-prépa</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-1923"
                                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-1923  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://www.esprit-prepa.com/ACCUEIL.aspx"
                                                               class=" main-menu-link main-menu-link-sub">Classes
                                                                M.P.S.I</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-1918"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1918  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">FORMATION
                                                        CONTINUE</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-1924"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1924  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/cours-du-soir/"
                                                               class=" main-menu-link main-menu-link-sub">Cours
                                                                du soir</a></li>
                                                        <li id="menu-item-1925"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1925  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/mba/"
                                                               class=" main-menu-link main-menu-link-sub">Executive
                                                                MBA</a>
                                                            <ul class="sub-menu clearfix">
                                                                <li id="menu-item-2307"
                                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2307  main-menu-item-sub main-menu-item-sub-sub menu-item-odd menu-item-depth-3">
                                                                    <a href="http://esprit.tn/esprit-language-center/"
                                                                       class=" main-menu-link main-menu-link-sub">Esprit
                                                                        Language Center</a></li>
                                                                <li id="menu-item-5041"
                                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5041  main-menu-item-sub main-menu-item-sub-sub menu-item-odd menu-item-depth-3">
                                                                    <a href="http://esprit.tn/tef-tefaq/"
                                                                       class=" main-menu-link main-menu-link-sub">TEF
                                                                        &#038; TEFAQ</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1926"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1926  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#" class=" main-menu-link main-menu-link-top">R.D.I.</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-2276"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2276  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/esprit-tech/"
                                                       class=" main-menu-link main-menu-link-sub">Esprit-Tech</a>
                                                </li>
                                                <li id="menu-item-2275"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2275  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/productions/"
                                                       class=" main-menu-link main-menu-link-sub">Productions</a>
                                                </li>
                                                <li id="menu-item-2274"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2274  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/les-equipes/"
                                                       class=" main-menu-link main-menu-link-sub">Les
                                                        équipes</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1932"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1932  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#"
                                               class=" main-menu-link main-menu-link-top">ENTREPRISES</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-2248"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2248  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/esprit-entreprise/"
                                                       class=" main-menu-link main-menu-link-sub">Esprit
                                                        Entreprise</a></li>
                                                <li id="menu-item-2365"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2365  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/stages/"
                                                       class=" main-menu-link main-menu-link-sub">Stages</a>
                                                </li>
                                                <li id="menu-item-1938"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1938  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/esprit-incubator/"
                                                       class=" main-menu-link main-menu-link-sub">ESPRIT
                                                        Incubator</a></li>
                                                <li id="menu-item-8815"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-8815  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/esprit-fondation/"
                                                       class=" main-menu-link main-menu-link-sub">Fondation
                                                        Esprit</a></li>
                                                <li id="menu-item-4985"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4985  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">Esprit
                                                        Language Center</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-4600"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4600  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esprit-language-center/"
                                                               class=" main-menu-link main-menu-link-sub">Présentation</a>
                                                        </li>
                                                        <li id="menu-item-4986"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4986  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/tef-tefaq/"
                                                               class=" main-menu-link main-menu-link-sub">TEF
                                                                &#038; TEFAQ</a></li>
                                                        <li id="menu-item-6335"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-6335  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esprit-language-center/aptis-test/"
                                                               class=" main-menu-link main-menu-link-sub">APTIS
                                                                TEST</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-9872"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-9872  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/formation-certifiante/"
                                                       class=" main-menu-link main-menu-link-sub">Formation
                                                        Certifiante</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1933"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1933  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#"
                                               class=" main-menu-link main-menu-link-top">INTERNATIONAL</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-1944"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1944  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/experience-a-linternational/"
                                                       class=" main-menu-link main-menu-link-sub">Avoir une
                                                        expérience à l’international</a></li>
                                                <li id="menu-item-2160"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2160  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/modalites-dentree/"
                                                       class=" main-menu-link main-menu-link-sub">Venir à
                                                        ESPRIT</a></li>
                                                <li id="menu-item-2092"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2092  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/temoignages/"
                                                       class=" main-menu-link main-menu-link-sub">Témoignages</a>
                                                </li>
                                                <li id="menu-item-1947"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1947  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/partenariats/"
                                                       class=" main-menu-link main-menu-link-sub">Institutions
                                                        partenaires</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1934"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1934  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#" class=" main-menu-link main-menu-link-top">VIE
                                                ETUDIANTE</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-10032"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-10032  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/presentation-2/"
                                                       class=" main-menu-link main-menu-link-sub">PRESENTATION</a>
                                                </li>
                                                <li id="menu-item-1948"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1948  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">RENTREE
                                                        SCOLAIRE</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-1951"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1951  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/logement-et-restauration/"
                                                               class=" main-menu-link main-menu-link-sub">Logement
                                                                et restauration</a></li>
                                                        <li id="menu-item-8816"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-8816  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/esprit-fondation/"
                                                               class=" main-menu-link main-menu-link-sub">Fondation
                                                                Esprit</a></li>
                                                        <li id="menu-item-2170"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2170  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/modalites-dentree/"
                                                               class=" main-menu-link main-menu-link-sub">Inscription</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-1949"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1949  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">VIE
                                                        SUR CAMPUS</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-2171"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2171  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/infrastructure/"
                                                               class=" main-menu-link main-menu-link-sub">Infrastructure</a>
                                                        </li>
                                                        <li id="menu-item-1955"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1955  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/clubs/"
                                                               class=" main-menu-link main-menu-link-sub">Clubs</a>
                                                        </li>
                                                        <li id="menu-item-1956"
                                                            class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1956  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/evenements-et-challenges/"
                                                               class=" main-menu-link main-menu-link-sub">Evénements
                                                                et Challenges</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-1950"
                                                    class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1950  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="#" class=" main-menu-link main-menu-link-sub">GUIDE
                                                        ETUDIANT</a>
                                                    <ul class="sub-menu clearfix">
                                                        <li id="menu-item-1957"
                                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-1957  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                            <a href="http://esprit.tn/coming-soon/"
                                                               class=" main-menu-link main-menu-link-sub">TELECHARGER
                                                                EN PDF</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-10031"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-10031  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/cellule-decoute/"
                                                       class=" main-menu-link main-menu-link-sub">CELLULE
                                                        D&rsquo;ECOUTE</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1935"
                                            class="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1935  main-menu-item-top  menu-item-even menu-item-depth-0">
                                            <a href="#"
                                               class=" main-menu-link main-menu-link-top">ACTUALITES</a>
                                            <ul class="sub-menu clearfix">
                                                <li id="menu-item-1959"
                                                    class="main-menu-item menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1959  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/category/evenements-et-challenges/"
                                                       class=" main-menu-link main-menu-link-sub">Evènements et
                                                        Challenges</a></li>
                                                <li id="menu-item-5917"
                                                    class="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5917  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                    <a href="http://esprit.tn/partenariats-esprit/"
                                                       class=" main-menu-link main-menu-link-sub">Partenariats</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div
                            class='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right'>
                            <div class="fxb fxb-row fxb-row-col fxb-center-y">

                                <div
                                    class='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top'>
                                    <a href="/login" id="ctabutton"
                                       class="sh-component ctabutton kl-cta-ribbon "
                                       target="_self"><strong>LOGIN</strong>PLATFORM
                                    </a></div>


                            </div>
                        </div>
                    </div>
                </div>
            );
        else
            return (<div>

                <div className="login_register_stuff"></div>
                <div id="fb-root"></div>
                <div className="fxb-row site-header-main  header-no-bottom ">

                    <div
                        className='fxb-col fxb fxb-start-x fxb-center-y fxb-basis-auto fxb-grow-0 fxb-sm-full site-header-col-left site-header-main-left'>
                        <div id="logo-container" className="logo-container hasInfoCard logosize--yes">
                            <h1 className='site-logo logo ' id='logo'><a href='http://esprit.tn/'
                                                                         className='site-logo-anch'><img
                                className="logo-img site-logo-img"
                                src="http://esprit.tn/wp-content/uploads/2016/05/logo_esprit_original.png"
                                alt="esprit" title="se former autrement"
                                data-mobile-logo="http://esprit.tn/wp-content/uploads/2016/04/logo_footer.png"/></a>
                            </h1>

                            <div id="infocard" className="logo-infocard">
                                <div className="custom ">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <div className="infocard-wrapper text-center">
                                                <p>
                                                    <img
                                                        src="http://esprit.tn/wp-content/uploads/2016/04/logo_footer.png"
                                                        alt="esprit"/></p>
                                                <p>Ecole Supérieure Privée d'Ingénierie et des
                                                    Technologies</p>
                                            </div>
                                        </div>

                                        <div className="col-sm-7">
                                            <div className="custom contact-details">

                                                <p>
                                                    <strong>T (+216) 70 68 56 85</strong>

                                                    Email :&nbsp;<a
                                                    href="mailto:contact@esprit.tn">contact@esprit.tn</a>
                                                </p>

                                                <p>
                                                    ESPRIT Z.I. </p><p>Chotrana II - B.P. 160 - 2083 Pôle
                                                Technologique - El Ghazala </p>

                                                <a href="https://goo.gl/maps/kXbCmPs6AXr" target="_blank"
                                                   className="map-link">
                                                    <span
                                                        className="glyphicon glyphicon-map-marker kl-icon-white"></span>
                                                    <span>Ouvrir dans Google Maps</span>
                                                </a>

                                            </div>


                                            <ul className="social-icons sc--clean">
                                                <li className="social-icons-li"><a
                                                    href="https://www.facebook.com/esprit.tn/?fref=ts"
                                                    data-zniconfam="kl-social-icons" data-zn_icon=""
                                                    target="_blank" title="Facebook"></a></li>
                                                <li className="social-icons-li"><a
                                                    href="https://twitter.com/Esprit_News?lang=fr"
                                                    data-zniconfam="kl-social-icons" data-zn_icon=""
                                                    target="_blank" title="Twitter"></a></li>
                                                <li className="social-icons-li"><a
                                                    href="https://plus.google.com/+ESPRITEcoleSupPriv%C3%A9edIng%C3%A9nierieetdeTechnologies"
                                                    data-zniconfam="kl-social-icons" data-zn_icon=""
                                                    target="_blank" title="Google+"></a></li>
                                                <li className="social-icons-li"><a
                                                    href="https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA"
                                                    data-zniconfam="kl-social-icons" data-zn_icon=""
                                                    target="_blank" title="Youtube"></a></li>
                                                <li className="social-icons-li"><a
                                                    href="https://www.linkedin.com/company/1146626?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1146626%2Cidx%3A5-2-11%2CtarId%3A1467110950798%2Ctas%3Aesprit"
                                                    data-zniconfam="kl-social-icons" data-zn_icon=""
                                                    target="_blank" title="LinkedIn"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="separator site-header-separator visible-xs"></div>
                    </div>

                    <div
                        className='fxb-col fxb fxb-center-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-center site-header-main-center'>
                        <div className="sh-component main-menu-wrapper">

                            <div className="zn-res-menuwrapper">
                                <a href="#" className="zn-res-trigger zn-header-icon"></a>
                            </div>
                            <div id="main-menu"
                                 className="main-nav mainnav--active-bg mainnav--pointer-dash nav-mm--light zn_mega_wrapper ">
                                <ul id="menu-menuprincipalesprit"
                                    className="main-menu main-menu-nav zn_mega_menu ">
                                    <li id="menu-item-1894"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1894  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#" className=" main-menu-link main-menu-link-top">ESPRIT</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-1895"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1895  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/mot-du-pdg/"
                                                   className=" main-menu-link main-menu-link-sub">Mot du
                                                    Président</a></li>
                                            <li id="menu-item-1897"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1897  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/valeurs-de-lecole/"
                                                   className=" main-menu-link main-menu-link-sub">Valeurs de
                                                    l&rsquo;école</a>
                                            </li>
                                            <li id="menu-item-1898"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1898  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/les-plus-desprit/"
                                                   className=" main-menu-link main-menu-link-sub">Les plus
                                                    d&rsquo;ESPRIT</a>
                                            </li>
                                            <li id="menu-item-2038"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2038  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#"
                                                   className=" main-menu-link main-menu-link-sub">Gouvernance</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-1896"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1896  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/gouvernance/"
                                                           className=" main-menu-link main-menu-link-sub">Gouvernance
                                                            stratégique</a></li>
                                                    <li id="menu-item-1900"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1900  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/services-de-lecole/"
                                                           className=" main-menu-link main-menu-link-sub">Services
                                                            de l&rsquo;école</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-6910"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-6910  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/qualite-et-amelioration-continue/"
                                                   className=" main-menu-link main-menu-link-sub">Politique
                                                    Qualité</a></li>
                                            <li id="menu-item-5918"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5918  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/partenariats-esprit/"
                                                   className=" main-menu-link main-menu-link-sub">Partenariats</a>
                                            </li>
                                            <li id="menu-item-4726"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4726  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/brochures-et-logos/"
                                                   className=" main-menu-link main-menu-link-sub">Salle de
                                                    Presse</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1902"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1902  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#" className=" main-menu-link main-menu-link-top">ADMISSION</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-1906"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1906  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/inscription-concours-ecole-ingenieur/"
                                                   className=" main-menu-link main-menu-link-sub">Esprit école
                                                    d&rsquo;ingénieurs</a>
                                            </li>
                                            <li id="menu-item-7780"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-7780  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://www.esprit-prepa.com/ADMISSION/Pr%C3%A9inscription.aspx"
                                                   className=" main-menu-link main-menu-link-sub">Esprit-prépa</a>
                                            </li>
                                            <li id="menu-item-7779"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7779  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/inscription-au-concoursesb/"
                                                   className=" main-menu-link main-menu-link-sub">Esprit School
                                                    of Business</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1915"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1915  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#"
                                           className=" main-menu-link main-menu-link-top">FORMATIONS</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-1916"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1916  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">Esprit
                                                    école d&rsquo;ingénieurs</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-2300"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2300  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/presentation/"
                                                           className=" main-menu-link main-menu-link-sub">Présentation</a>
                                                    </li>
                                                    <li id="menu-item-1919"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1919  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/specialites/"
                                                           className=" main-menu-link main-menu-link-sub">Spécialités
                                                            et Options</a></li>
                                                    <li id="menu-item-1921"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1921  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/stages/"
                                                           className=" main-menu-link main-menu-link-sub">Stages</a>
                                                    </li>
                                                    <li id="menu-item-2296"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2296  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/langues-et-developpement-personnel/"
                                                           className=" main-menu-link main-menu-link-sub">Langues
                                                            et dév personnel</a></li>
                                                    <li id="menu-item-7442"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7442  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/formation-des-formateurs/"
                                                           className=" main-menu-link main-menu-link-sub">Formation
                                                            des formateurs</a></li>
                                                    <li id="menu-item-1920"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1920  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/reglement-scolaire/"
                                                           className=" main-menu-link main-menu-link-sub">Réglement
                                                            scolaire</a></li>
                                                    <li id="menu-item-7441"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-7441  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/calendrier-des-examens/"
                                                           className=" main-menu-link main-menu-link-sub">Calendrier
                                                            des examens-Session de rattrapage 2017/2018</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-4601"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4601  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">Esprit
                                                    School of Business</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-4612"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4612  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esb-presentation/"
                                                           className=" main-menu-link main-menu-link-sub">Présentation</a>
                                                    </li>
                                                    <li id="menu-item-4611"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4611  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esb-specialites/"
                                                           className=" main-menu-link main-menu-link-sub">Spécialités</a>
                                                    </li>
                                                    <li id="menu-item-4610"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4610  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esb-reglement-scolaire/"
                                                           className=" main-menu-link main-menu-link-sub">Règlement
                                                            scolaire</a></li>
                                                    <li id="menu-item-4892"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4892  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esb-inscription/"
                                                           className=" main-menu-link main-menu-link-sub">Inscription</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1917"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1917  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#"
                                                   className=" main-menu-link main-menu-link-sub">Esprit-prépa</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-1923"
                                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-1923  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://www.esprit-prepa.com/ACCUEIL.aspx"
                                                           className=" main-menu-link main-menu-link-sub">Classes
                                                            M.P.S.I</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1918"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1918  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">FORMATION
                                                    CONTINUE</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-1924"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1924  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/cours-du-soir/"
                                                           className=" main-menu-link main-menu-link-sub">Cours
                                                            du soir</a></li>
                                                    <li id="menu-item-1925"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1925  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/mba/"
                                                           className=" main-menu-link main-menu-link-sub">Executive
                                                            MBA</a>
                                                        <ul className="sub-menu clearfix">
                                                            <li id="menu-item-2307"
                                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2307  main-menu-item-sub main-menu-item-sub-sub menu-item-odd menu-item-depth-3">
                                                                <a href="http://esprit.tn/esprit-language-center/"
                                                                   className=" main-menu-link main-menu-link-sub">Esprit
                                                                    Language Center</a></li>
                                                            <li id="menu-item-5041"
                                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5041  main-menu-item-sub main-menu-item-sub-sub menu-item-odd menu-item-depth-3">
                                                                <a href="http://esprit.tn/tef-tefaq/"
                                                                   className=" main-menu-link main-menu-link-sub">TEF
                                                                    &#038; TEFAQ</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1926"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1926  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#" className=" main-menu-link main-menu-link-top">R.D.I.</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-2276"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2276  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/esprit-tech/"
                                                   className=" main-menu-link main-menu-link-sub">Esprit-Tech</a>
                                            </li>
                                            <li id="menu-item-2275"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2275  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/productions/"
                                                   className=" main-menu-link main-menu-link-sub">Productions</a>
                                            </li>
                                            <li id="menu-item-2274"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2274  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/les-equipes/"
                                                   className=" main-menu-link main-menu-link-sub">Les
                                                    équipes</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1932"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1932  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#"
                                           className=" main-menu-link main-menu-link-top">ENTREPRISES</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-2248"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2248  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/esprit-entreprise/"
                                                   className=" main-menu-link main-menu-link-sub">Esprit
                                                    Entreprise</a></li>
                                            <li id="menu-item-2365"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2365  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/stages/"
                                                   className=" main-menu-link main-menu-link-sub">Stages</a>
                                            </li>
                                            <li id="menu-item-1938"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1938  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/esprit-incubator/"
                                                   className=" main-menu-link main-menu-link-sub">ESPRIT
                                                    Incubator</a></li>
                                            <li id="menu-item-8815"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-8815  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/esprit-fondation/"
                                                   className=" main-menu-link main-menu-link-sub">Fondation
                                                    Esprit</a></li>
                                            <li id="menu-item-4985"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4985  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">Esprit
                                                    Language Center</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-4600"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4600  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esprit-language-center/"
                                                           className=" main-menu-link main-menu-link-sub">Présentation</a>
                                                    </li>
                                                    <li id="menu-item-4986"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-4986  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/tef-tefaq/"
                                                           className=" main-menu-link main-menu-link-sub">TEF
                                                            &#038; TEFAQ</a></li>
                                                    <li id="menu-item-6335"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-6335  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esprit-language-center/aptis-test/"
                                                           className=" main-menu-link main-menu-link-sub">APTIS
                                                            TEST</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-9872"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-9872  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/formation-certifiante/"
                                                   className=" main-menu-link main-menu-link-sub">Formation
                                                    Certifiante</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1933"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1933  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#"
                                           className=" main-menu-link main-menu-link-top">INTERNATIONAL</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-1944"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1944  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/experience-a-linternational/"
                                                   className=" main-menu-link main-menu-link-sub">Avoir une
                                                    expérience à l’international</a></li>
                                            <li id="menu-item-2160"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2160  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/modalites-dentree/"
                                                   className=" main-menu-link main-menu-link-sub">Venir à
                                                    ESPRIT</a></li>
                                            <li id="menu-item-2092"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2092  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/temoignages/"
                                                   className=" main-menu-link main-menu-link-sub">Témoignages</a>
                                            </li>
                                            <li id="menu-item-1947"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1947  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/partenariats/"
                                                   className=" main-menu-link main-menu-link-sub">Institutions
                                                    partenaires</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1934"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1934  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#" className=" main-menu-link main-menu-link-top">VIE
                                            ETUDIANTE</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-10032"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-10032  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/presentation-2/"
                                                   className=" main-menu-link main-menu-link-sub">PRESENTATION</a>
                                            </li>
                                            <li id="menu-item-1948"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1948  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">RENTREE
                                                    SCOLAIRE</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-1951"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1951  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/logement-et-restauration/"
                                                           className=" main-menu-link main-menu-link-sub">Logement
                                                            et restauration</a></li>
                                                    <li id="menu-item-8816"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-8816  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/esprit-fondation/"
                                                           className=" main-menu-link main-menu-link-sub">Fondation
                                                            Esprit</a></li>
                                                    <li id="menu-item-2170"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2170  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/modalites-dentree/"
                                                           className=" main-menu-link main-menu-link-sub">Inscription</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1949"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1949  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">VIE
                                                    SUR CAMPUS</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-2171"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2171  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/infrastructure/"
                                                           className=" main-menu-link main-menu-link-sub">Infrastructure</a>
                                                    </li>
                                                    <li id="menu-item-1955"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1955  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/clubs/"
                                                           className=" main-menu-link main-menu-link-sub">Clubs</a>
                                                    </li>
                                                    <li id="menu-item-1956"
                                                        className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1956  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/evenements-et-challenges/"
                                                           className=" main-menu-link main-menu-link-sub">Evénements
                                                            et Challenges</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1950"
                                                className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1950  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="#" className=" main-menu-link main-menu-link-sub">GUIDE
                                                    ETUDIANT</a>
                                                <ul className="sub-menu clearfix">
                                                    <li id="menu-item-1957"
                                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-1957  main-menu-item-sub main-menu-item-sub-sub menu-item-even menu-item-depth-2">
                                                        <a href="http://esprit.tn/coming-soon/"
                                                           className=" main-menu-link main-menu-link-sub">TELECHARGER
                                                            EN PDF</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-10031"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-10031  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/cellule-decoute/"
                                                   className=" main-menu-link main-menu-link-sub">CELLULE
                                                    D&rsquo;ECOUTE</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1935"
                                        className="main-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1935  main-menu-item-top  menu-item-even menu-item-depth-0">
                                        <a href="#"
                                           className=" main-menu-link main-menu-link-top">ACTUALITES</a>
                                        <ul className="sub-menu clearfix">
                                            <li id="menu-item-1959"
                                                className="main-menu-item menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1959  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/category/evenements-et-challenges/"
                                                   className=" main-menu-link main-menu-link-sub">Evènements et
                                                    Challenges</a></li>
                                            <li id="menu-item-5917"
                                                className="main-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-5917  main-menu-item-sub  menu-item-odd menu-item-depth-1">
                                                <a href="http://esprit.tn/partenariats-esprit/"
                                                   className=" main-menu-link main-menu-link-sub">Partenariats</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div
                        className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-col-right site-header-main-right'>
                        <div className="fxb fxb-row fxb-row-col fxb-center-y">

                            <div
                                className='fxb-col fxb fxb-end-x fxb-center-y fxb-basis-auto fxb-sm-half site-header-main-right-top'>
                                <a onClick={this.handleLogout} id="ctabutton"
                                   className="sh-component ctabutton kl-cta-ribbon "
                                   target="_self"><strong>Log out</strong>PLATFORM
                                </a></div>


                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Navbar;