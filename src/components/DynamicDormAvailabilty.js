import React, {Component} from 'react';
import './css/style.css';

class DormAvailabilty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count_double_girls_dorm: '',
            count_double_boys_dorm: '',
            count_triple_girls_dorm: '',
            count_triple_boys_dorm: '',
            count_double_available_girls_dorm: '',
            count_double_available_boys_dorm: '',
            count_triple_available_girls_dorm: '',
            count_triple_available_boys_dorm: ''
        }
    }

    componentDidMount(){

        /********************* dorms *************************/
        fetch('http://localhost:3000/dorm/count_dorm/G/Double')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_double_girls_dorm: json
                })
            });

        fetch('http://localhost:3000/dorm/count_dorm/G/Triple')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_triple_girls_dorm: json
                })
            });
        fetch('http://localhost:3000/dorm/count_dorm/B/Double')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_double_boys_dorm: json
                })
            });

        fetch('http://localhost:3000/dorm/count_dorm/B/Triple')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_triple_boys_dorm: json
                })
            });
        /********************* Availability *********************/
        fetch('http://localhost:3000/dorm/count_available_dorm/G/Double')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_double_available_girls_dorm: json
                })
            });

        fetch('http://localhost:3000/dorm/count_available_dorm/G/Triple')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_triple_available_girls_dorm: json
                })
            });
        fetch('http://localhost:3000/dorm/count_available_dorm/B/Double')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_double_available_boys_dorm: json
                })
            });

        fetch('http://localhost:3000/dorm/count_available_dorm/B/Triple')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    count_triple_available_boys_dorm: json
                })
            });
    }

    render() {
        return (
              <div className="itemHeader kl-blog-item-header">

                    <div
                        className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluid2018ffbb ">
                        <h2>Home Hosting Availabilty</h2><span
                        className="tbk__symbol "><span></span></span></div>

                    <center>
                        <table width = "100%">
                            <thead>
                            <tr>
                                <th>Dorm Type</th>
                                <th>Count of double rooms</th>
                                <th>Count of triple rooms</th>

                                <th>Available double rooms</th>
                                <th>Available triple rooms</th>

                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Girls Dorm</td>
                                    <td>{this.state.count_double_girls_dorm}</td>
                                    <td>{this.state.count_triple_girls_dorm}</td>

                                    <td>{this.state.count_double_available_girls_dorm}</td>
                                    <td>{this.state.count_triple_available_girls_dorm}</td>

                                </tr>
                                <tr>

                                    <td>Boys Dorm</td>
                                    <td>{this.state.count_double_boys_dorm}</td>
                                    <td>{this.state.count_triple_boys_dorm}</td>

                                    <td>{this.state.count_double_available_boys_dorm}</td>
                                    <td>{this.state.count_triple_available_boys_dorm}</td>
                                </tr>

                            </tbody>

                        </table></center>

                </div>


        );
    }
}

export default DormAvailabilty