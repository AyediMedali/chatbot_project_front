import React, {Component} from 'react';
import './css/style.css';

class Reservation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation : [],
        }
    }

    componentDidMount() {

        fetch('http://localhost:3000/reservations/get_last_reservation_id2')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    reservation : json.reser
                })
            });

    }

    to_date_function(date){
        var date2 = new Date(date);
        console.log('date = '+date);
       console.log('date = '+date2);
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(date2)

    }


    render() {
        return (

            <div className="itemHeader kl-blog-item-header">

                <div
                    className="services_box eluidc971e8e6  servicebox-sch--light element-scheme--light services_box--modern sb--hasicon">
                    <div className="services_box__inner clearfix">

                        <div className="services_box__content"><div
                            className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluid2018ffbb ">
                            <h2>Reservation Request details</h2><span
                            className="tbk__symbol "><span></span></span></div>
                            <div className="services_box__list-wrapper">
                                <span className="services_box__list-bg"></span>
                                <ul className="services_box__list">  {this.state.reservation.map(item =>
                                    <div>
                                        <li className=""><span className="services_box__list-text"><h4> <b>Reservation start date :</b> {this.to_date_function(item.start_date)}</h4></span></li>
                                    <li className=""><span className="services_box__list-text"><h4><b>Reservation end date :</b> {this.to_date_function(item.end_date)}</h4></span></li>
                                    <li className=""><span className="services_box__list-text"><h4><b>Dorm Number : </b>{item.dorm.dorm_number}</h4></span></li>
                                    <li className=""><span className="services_box__list-text"><h4><b>Dorm Type : </b>{item.dorm.dorm_type}</h4></span></li>
                                    <li className=""><span className="services_box__list-text"><h4><b>Dorm Capacity :</b> {item.dorm.dorm_capacity}</h4></span></li>
                                    </div>
                                        )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Reservation


