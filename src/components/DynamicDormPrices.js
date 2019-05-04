import React, {Component} from 'react';
import './css/style.css';

class DormPrices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            double_dorm_price : '',
            triple_room_price : ''
        }
    }

    componentDidMount() {

        fetch('https://chatbot-bug-hunters-back.herokuapp.com/dorm/get_dorm_price/Double')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    double_dorm_price : json
                })
            });
        fetch('https://chatbot-bug-hunters-back.herokuapp.com/dorm/get_dorm_price/Triple')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    triple_room_price : json
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
                            <th rowSpan={2} >Dorm capacity</th>
                            <th rowSpan={2} >Annual fees</th>
                            <th rowSpan={2} >TVA %</th>

                            <th colSpan={2} >Payment per semester</th>
                        </tr>
                        <tr>
                            <th>1st slice</th>
                            <th>2nd slice</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Double rooms</td>
                            <td>{Number(this.state.double_dorm_price)*2} dt</td>
                            <td>0</td>

                            <td>{this.state.double_dorm_price} dt</td>
                            <td>{this.state.double_dorm_price} dt</td>
                        </tr>
                        <tr>
                            <td>Triple rooms</td>
                            <td>{Number(this.state.triple_room_price)*2} dt</td>
                            <td>0</td>

                            <td>{this.state.triple_room_price} dt</td>
                            <td>{this.state.triple_room_price} dt</td>
                        </tr>

                        </tbody>

                    </table></center>

            </div>
        );
    }
}

export default DormPrices