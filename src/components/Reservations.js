import React, {Component} from 'react';
import './css/style.css';



class Reservations extends Component{

    constructor(props) {
        super(props);
        this.state = {
            confirmed_reservations: [],
            reservation_requests: []
        }
    }

    componentDidMount(){

        fetch('http://localhost:3000/reservations/get_confirmed_reservation_by_id/'+localStorage.getItem('id'))
            .then(res => res.json())
            .then(json => {
                this.setState({
                    confirmed_reservations: json
                })
            });

        fetch('http://localhost:3000/reservations/get_requested_reservation_by_id/'+localStorage.getItem('id'))
            .then(res => res.json())
            .then(json => {
                this.setState({
                    reservation_requests: json
                })
            });
    }

    to_date_function(date){
        var date2 = new Date(date);
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(date2)
    }

    get_reservations(reservations){
        if(reservations.length!==0){
            return (<center><table width = "100%">
                <thead>
                <tr>
                    <th>Dorm Photo</th>
                    <th>Dorm Number</th>
                    <th>Dorm Type</th>

                    <th>&nbsp; Reservation start date &nbsp;</th>
                    <th>&nbsp;Reservation end date &nbsp;</th>

                </tr>
                </thead>
                <tbody>

                    {reservations.map(item => (
                        <tr>

                            <td><a title=""
                                   href="http://esprit.tn/wp-content/uploads/2018/08/DSCN1045.jpg">
                                <img src={require('./images/dorm_image1.jpg')}
                                     width='200px' alt="" title=""/></a></td>
                            <td>{item.dorm.dorm_Number}</td>
                            <td>{item.dorm.dorm_type}</td>

                        <td>{this.to_date_function(item.start_date)}</td>
                        <td>{this.to_date_function(item.end_date)}</td>

                        </tr>
                    ))}


                </tbody>


            </table></center>) ;
        }else {
            if(reservations===this.state.confirmed_reservations){
            return (<div>
                <center>You don't have any confirmed reservations.</center>
            </div>)}
                else {
            return (<div>
                <center>You don't have any reservation requests.</center>
            </div>) ;}
        }
    }

    /*get_reservation_requests(){
        if(this.state.reservation_requests.length!==0){
            return (<div><center><ul>
                {this.state.reservation_requests.map(item => (

                    <li> {this.to_date_function(item.start_date)}  &nbsp; {this.to_date_function(item.end_date)}</li>

                ))}
            </ul></center></div>) ;
        }else {
            return (<div>
                <center>You don't have any reservation requests.</center>
            </div>) ;
        }

    }*/

    render() {

        //var { confirmed_reservations } = this.state ;
        return (
            <div>

                <div
                    className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluid2018ffbb ">
                    <h4>My Confirmed Reservations</h4><span
                    className="tbk__symbol "><span></span></span></div>
                {this.get_reservations(this.state.confirmed_reservations)}

                <div
                    className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluid2018ffbb ">
                    <h4>My Reservation Requests</h4><span
                    className="tbk__symbol "><span></span></span></div>
                {this.get_reservations(this.state.reservation_requests)}
            </div>

        ) ;

    }

}
export default Reservations