import React, {Component} from 'react';
import Navbar from '../components/Navbar' ; 
import {NavLink} from 'react-router-dom';

class Template extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar/>
               <div className="zn_pb_wrapper clearfix zn_sortable_content" data-droplevel={0}>		<div className="kl-slideshow simpleslider__slideshow eluid4e24dbb6  maskcontainer--mask4 mask4l ">
    <div className="fake-loading loading-2s" />
    <div className="bgback" />
    <div className="kl-bg-source"><div className="kl-bg-source__bgimage" style={{backgroundImage: 'url(http://esprit.tn/wp-content/uploads/2016/04/10426796_729097043828492_8312068013354344062_n.jpg)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center top', backgroundSize: 'cover'}} /><div className="kl-bg-source__overlay" style={{background: 'linear-gradient(to bottom,  rgba(239,239,239,0.85) 0%,rgba(255,255,255,0.95) 100%)'}} /></div>			<div className="th-sparkles" />
    <div className="kl-slideshow-inner container kl-slideshow-safepadding">
      <div className="row">
        <div className="col-sm-12">
          <div className="zn_simple_slider_container showOnMouseover   kl-flex--modern">
          </div></div></div></div></div></div>

            </React.Fragment>
        );
    }
}

export default Template;