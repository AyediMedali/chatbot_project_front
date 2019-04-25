import React, {Component} from 'react';
import './css/style.css';
import {NavLink} from 'react-router-dom'

class Dorm extends Component {

    verifyConnected(){
        if(localStorage.getItem('token') !== ''){
            return (<div>
                <NavLink to="/My_reservations" style={{color : '#1627a8' ,position: 'absolute', left: '950px', textDecoration : 'underline'}}>Show my reservations</NavLink>
            </div>) ;
        }else {
            return(<div>
            </div>) ;
        }
    }
        render() {
        return (

            <div>
                <div className="col-sm-6">
                    <ul vocab="http://schema.org/" typeof="BreadcrumbList"
                        className="breadcrumbs fixclear bread-style--black">
                        <li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                                                                            href="http://esprit.tn">Admission</a></li>
                        <li>Dorm and reservations</li>
                    </ul>
                </div>

                <div className="clear"></div>
                <div
                className="itemContainer kl-blog-item-container kl-blog--normal-post blog-post post-7602 post type-post status-publish format-video hentry category-evenements-et-challenges category-non-classe post_format-post-format-video">

                <div className="itemHeader kl-blog-item-header">
                    <h3 className="catItemAuthor kl-blog-item-author"><a href="#" rel="bookmark">ESPRIT Home Hosting</a>
                    </h3>
                    <h5>ESPRIT has within the Chotrana site a university residence for its students, of limited
                        capacity.
                        The University Residence welcomes students of Esprit at their request and wants to be a
                        framework
                        ensuring respect for the freedom of everyone while allowing everyone to work in the best
                        conditions.</h5>
                    <h5>The examination of the requests for dorms is done on the basis of a request paper and the
                        deposit of a folder,
                        within the limits of the places available, the priority is given to the girls.</h5>

                    <div className="post_details kl-blog-item-details kl-font-alt">

                        <div className="eluid205e96b5   col-md-6 col-sm-6   zn_sortable_content zn_content "
                             data-droplevel="2">
                            <div
                                className=" eluid2e9c4404 gridPhotoGallery mfp-gallery mfp-gallery--misc gridPhotoGallery--ratio-square gridPhotoGallery--cols-4 gpg-gutter--5  "
                                data-cols="4" data-layout="masonry" style={{position: 'relative', height: '116.25px'}}>


                                <div className="gridPhotoGallery__item gridPhotoGalleryItem--w1 "
                                     style={{left: '250px', top: '0px'}}>
                                    <a title=""
                                       className="gridPhotoGalleryItem--h1 gridPhotoGallery__link kl-fontafter-alt"
                                       data-lightbox="mfp" data-mfp="image"
                                       href="http://esprit.tn/wp-content/uploads/2018/08/DSCN1045.jpg">
                                        <img className="gridPhotoGallery__img cover-fit-img"
                                             src={require('./images/dorm_image1.jpg')} alt="" title=""/><i
                                        className="kl-icon glyphicon glyphicon-search circled-icon ci-large">
                                    </i></a></div>

                                <div className="gridPhotoGallery__item gridPhotoGalleryItem--w1 "
                                     style={{position: 'absolute', left: '376px', top: '0px'}}>
                                    <a title=""
                                       className="gridPhotoGalleryItem--h1 gridPhotoGallery__link kl-fontafter-alt"
                                       data-lightbox="mfp" data-mfp="image"
                                       href="http://esprit.tn/wp-content/uploads/2018/08/DSCN1045.jpg">
                                        <img className="gridPhotoGallery__img cover-fit-img"
                                             src={require('./images/dorm_image2.jpg')} alt="" title=""/><i
                                        className="kl-icon glyphicon glyphicon-search circled-icon ci-large">
                                    </i></a></div>

                                <div className="gridPhotoGallery__item gridPhotoGalleryItem--w1 "
                                     style={{position: 'absolute', left: '502px', top: '0px'}}>
                                    <a title=""
                                       className="gridPhotoGalleryItem--h1 gridPhotoGallery__link kl-fontafter-alt"
                                       data-lightbox="mfp" data-mfp="image"
                                       href="http://esprit.tn/wp-content/uploads/2018/08/DSCN1042.jpg">
                                        <img className="gridPhotoGallery__img cover-fit-img"
                                             src={require('./images/dorm_image3.jpg')} alt="" title=""/>
                                        <i className="kl-icon glyphicon glyphicon-search circled-icon ci-large"></i></a>
                                </div>


                                <div className="gridPhotoGallery__item gridPhotoGalleryItem--w1 "
                                     style={{position: 'absolute', left: '628px', top: '0px'}}>
                                    <a title=""
                                       className="gridPhotoGalleryItem--h1 gridPhotoGallery__link kl-fontafter-alt"
                                       data-lightbox="mfp" data-mfp="image"
                                       href="http://esprit.tn/wp-content/uploads/2018/08/DSCN1037.jpg">
                                        <img className="gridPhotoGallery__img cover-fit-img"
                                             src={require('./images/dorm_image4.jpg')} alt="" title=""/>
                                        <i className="kl-icon glyphicon glyphicon-search circled-icon ci-large"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="clear"></div>
                    <div className="post_details kl-blog-item-details kl-font-alt">

                        <h4 class="m_title m_title_ext text-custom callout-banner-title">Dorm prices for
                            international students</h4>

                        <center><img src={require('./images/dorm_prices1.JPG')}
                                     width="60%" height="auto"></img></center>

                    </div>

                    <div className="post_details kl-blog-item-details kl-font-alt">

                        <h4 className="m_title m_title_ext text-custom callout-banner-title">Dorm prices for
                            Tunisian students</h4>

                        <center><img src={require('./images/dorm_prices2.JPG')}
                                     width="60%" height="auto"></img></center>

                    </div>
                    {this.verifyConnected()}

                    <div className="itemBody kl-blog-item-body">
                        <div className="itemIntroText kl-blog-item-content">
                        </div>
                        <div className="clear"></div>
                        <div className="itemBottom kl-blog-item-bottom clearfix">
                        </div>
                        <div className="clear"></div>
                    </div>
                    <ul className="itemLinks kl-blog-item-links kl-font-alt clearfix">
                        <li className="itemCategory kl-blog-item-category">

                            <span className="kl-blog-item-category-text">For more info : </span>
                            <a href="http://esprit.tn/category/evenements-et-challenges/" rel="category tag">call
                                70250014</a>, <a href="http://esprit.tn/category/non-classe/" rel="category tag">e-mail
                            contact@esprit.tn</a></li>
                    </ul>

                    <div className="itemComments kl-blog-item-comments">
                        <a href="#"
                           className="kl-blog-item-comments-link kl-font-alt">published : 2018/2019</a>
                    </div>
                </div>
                <div className="clear"></div>

            </div>
            </div>
        );
    }
}

export default Dorm