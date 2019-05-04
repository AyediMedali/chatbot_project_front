import React, {Component} from 'react';
import './css/style.css';


class Restaurant extends Component{

    constructor(props) {
        super(props);
        this.state = {
            all_inclusive_per_semester : '',
            F1_per_semester : '',
            F2_per_semester : ''
        }
    }

    componentDidMount() {

        fetch('http://localhost:3000/meals/get_price_per_semester/All inclusive')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    all_inclusive_per_semester : json
                })
            });
        fetch('http://localhost:3000/meals/get_price_per_semester/Half Board F1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    F1_per_semester : json
                })
            });
        fetch('http://localhost:3000/meals/get_price_per_semester/Half Board F2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    F2_per_semester : json
                })
            });
    }

    render() {
        return (
           <div>
               <div className="col-sm-6">
                   <ul vocab="http://schema.org/" typeof="BreadcrumbList"
                       className="breadcrumbs fixclear bread-style--black">
                       <li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                                                                           href="http://esprit.tn">Admission</a></li>
                       <li>Restaurant and prices</li>
                   </ul>

               </div>





            <div
                className="itemContainer kl-blog-item-container kl-blog--normal-post blog-post post-7602 post type-post status-publish format-video hentry category-evenements-et-challenges category-non-classe post_format-post-format-video">
                <div className="itemHeader kl-blog-item-header">

                    <h2>ESPRIT's Restaurant</h2><span
                    className="tbk__symbol "></span>

                    <h5>The EL Ghazela campus has a university restaurant and a cafeteria for ESPRIT students.</h5>
                    <div className="itemHeader kl-blog-item-header">
                        <div className="post_details kl-blog-item-details kl-font-alt">
                            <img src='http://esprit.tn/wp-content/uploads/2016/05/rest2.png'  alt=""
                                 title="" width = '95%'/>
                        </div>
                    </div>


                    <h3 class="ib2-content--title infobox2-title" ><a href="#" rel="bookmark">Restoration price grid
                        for international students</a></h3>
                    <div className="post_details kl-blog-item-details kl-font-alt">
                        <center>

                            <table width = "100%">
                                <thead>
                                <tr>
                                    <th rowSpan={2} >Amenities</th>
                                    <th rowSpan={2} >Annual fees in euro</th>
                                    <th rowSpan={2} >TVA %</th>
                                    <th rowSpan={2} >Amount all taxes included</th>
                                    <th colSpan={2} >Payment per semester</th>
                                </tr>
                                <tr>
                                    <th>1st slice</th>
                                    <th>2nd slice</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>All inclusive (Breakfast, Lunch, Dinner)</td>
                                    <td>1 260,748</td>
                                    <td>88,252</td>

                                    <td>1 349</td>
                                    <td>700</td>
                                    <td>649</td>
                                </tr>
                                <tr>
                                    <td>Half Board (F1) (Breakfast, Lunch, Dinner)</td>
                                    <td>720,561</td>
                                    <td>50,439</td>

                                    <td>771</td>
                                    <td>400</td>
                                    <td>371</td>
                                </tr>
                                <tr>
                                    <td>Half Board (F2) (Lunch, Dinner)</td>
                                    <td>585,047</td>
                                    <td>40,983</td>

                                    <td>626</td>
                                    <td>350</td>
                                    <td>276</td>
                                </tr>

                                </tbody>

                            </table>



                        </center>
                    </div>

                    <h3 class="ib2-content--title infobox2-title callout-banner-title"><a href="#" rel="bookmark">Restoration price grid
                        for Tunisian students</a></h3>
                    <div style={{width: '35%'}}><center><h5>Payment per semester : Annual commitment</h5></center></div>
                    <div className="post_details kl-blog-item-details kl-font-alt">
                        <center>

                            <table width = "100%">
                                <thead>
                                <tr>
                                    <th rowSpan={2} >Amenities</th>
                                    <th rowSpan={2} >Annual fees</th>
                                    <th rowSpan={2} >TVA %</th>
                                    <th rowSpan={2} >Amount all taxes included</th>
                                    <th colSpan={2} >Payment per semester</th>
                                </tr>
                                <tr>
                                    <th>1st slice</th>
                                    <th>2nd slice</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>All inclusive (Breakfast, Lunch, Dinner)</td>
                                    <td>3048,112</td>
                                    <td>215,888</td>

                                    <td>{Number(this.state.all_inclusive_per_semester)*2}</td>
                                    <td>{this.state.all_inclusive_per_semester}</td>
                                    <td>{this.state.all_inclusive_per_semester}</td>
                                </tr>
                                <tr>
                                    <td>Half Board (F1) (Breakfast, Lunch, Dinner)</td>
                                    <td>1755,701</td>
                                    <td>124,299</td>

                                    <td>{Number(this.state.F1_per_semester)*2}</td>
                                    <td>{this.state.F1_per_semester}</td>
                                    <td>{this.state.F1_per_semester}</td>
                                </tr>
                                <tr>
                                    <td>Half Board (F2) (Lunch, Dinner)</td>
                                    <td>1401,869</td>
                                    <td>98,000</td>

                                    <td>{Number(this.state.F2_per_semester)*2}</td>
                                    <td>{this.state.F2_per_semester}</td>
                                    <td>{this.state.F2_per_semester}</td>
                                </tr>

                                </tbody>

                            </table>
                        </center>
                    </div>
                    <div style={{width: '20%'}}><center><h5>Payment per month</h5></center></div>
                    <div className="post_details kl-blog-item-details kl-font-alt">
                        <center>

                            <table width = "80%">
                                <thead>
                                <tr>
                                    <th>Amenities</th>
                                    <th>Annual fees</th>
                                    <th>7% TVA</th>
                                    <th>Amount all taxes included</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>All inclusive (Breakfast, Lunch, Dinner)</td>


                                    <td>400</td>
                                    <td>28</td>
                                    <td>428</td>
                                </tr>
                                <tr>
                                    <td>Half Board (F1) (Breakfast, Lunch, Dinner)</td>


                                    <td>250</td>
                                    <td>17,5</td>
                                    <td>267,5</td>
                                </tr>
                                <tr>
                                    <td>Half Board (F2) (Lunch, Dinner)</td>


                                    <td>200</td>
                                    <td>14</td>
                                    <td>214</td>
                                </tr>

                                </tbody>

                            </table>


                        </center>
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
            </div>
           </div>);
    }

}

export default Restaurant