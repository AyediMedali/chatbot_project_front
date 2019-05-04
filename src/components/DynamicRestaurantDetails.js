import React, {Component} from 'react';
import './css/style.css';

class RestaurantDetails extends Component {

    render() {
        return (

            <div className="itemHeader kl-blog-item-header">

                <h2>ESPRIT Restaurant</h2><span
                className="tbk__symbol "></span>

                <h5>The EL Ghazela campus has a university restaurant and a cafeteria for ESPRIT students.</h5>
                <div className="post_details kl-blog-item-details kl-font-alt">

                <img src='http://esprit.tn/wp-content/uploads/2016/05/rest2.png'  alt=""
                     title="" width = '95%'/>

                </div>


            </div>

        );
    }
}

export default RestaurantDetails