import React, {Component} from 'react';
import './css/style.css';

class RestaurantPrices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_inclusive_per_semester : '',
            F1_per_semester : '',
            F2_per_semester : ''
        }
    }

    componentDidMount() {

        fetch('https://chatbot-bug-hunters-back.herokuapp.com/meals/get_price_per_semester/All inclusive')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    all_inclusive_per_semester : json
                })
            });
        fetch('https://chatbot-bug-hunters-back.herokuapp.com/meals/get_price_per_semester/Half Board F1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    F1_per_semester : json
                })
            });
        fetch('https://chatbot-bug-hunters-back.herokuapp.com/meals/get_price_per_semester/Half Board F2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    F2_per_semester : json
                })
            });
    }

    render() {
        return (
            <div className="itemHeader kl-blog-item-header">

                <div
                    className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluid2018ffbb ">
                    <h2>Home Hosting Prices</h2><span
                    className="tbk__symbol "><span></span></span></div>

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

                    </table></center>

            </div>
        );
    }
}

export default RestaurantPrices