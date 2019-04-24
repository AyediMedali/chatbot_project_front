import React, {Component} from 'react';
import './css/style.css';


class Restaurant extends Component{

    render() {
        return (
            <div
                className="itemContainer kl-blog-item-container kl-blog--normal-post blog-post post-7602 post type-post status-publish format-video hentry category-evenements-et-challenges category-non-classe post_format-post-format-video">
                <div className="itemHeader kl-blog-item-header">
                    <h3 class="ib2-content--title infobox2-title" ><a href="#" rel="bookmark">Restoration price grid
                        for international students</a></h3>
                    <div className="post_details kl-blog-item-details kl-font-alt">
                        <center><img src={require('./images/restaurant_prices_table1.JPG')}
                                     width="75%" height="auto"></img></center>
                    </div>

                    <h3 class="ib2-content--title infobox2-title callout-banner-title"><a href="#" rel="bookmark">Restoration price grid
                        for Tunisian students</a></h3>
                    <div style={{width: '35%'}}><center><h5>Payment per semester : Annual commitment</h5></center></div>
                    <div className="post_details kl-blog-item-details kl-font-alt">
                        <center><img src={require('./images/restaurant_prices_table2.JPG')}
                                     width="75%" height="auto"></img></center>
                    </div>
                    <div style={{width: '20%'}}><center><h5>Payment per month</h5></center></div>
                    <div className="post_details kl-blog-item-details kl-font-alt">
                        <center><img src={require('./images/restaurant_prices_table3.JPG')}
                                     width="75%" height="auto"></img></center>
                    </div>

                </div>
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
                    <a href="http://esprit.tn/en-video-le-bal-des-projets-20162017-ecole-ingenieur-tunisie/"
                       className="kl-blog-item-comments-link kl-font-alt">published : 2018/2019</a>
                </div>

                <div className="clear"></div>


            </div>);
    }

}

export default Restaurant