import React, {Component} from 'react';
import './css/style.css';

class RestaurantTimetable extends Component {


    render() {
        return (
            <div className="itemHeader kl-blog-item-header">

                <div
                    className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--border  tbk-icon-pos--after-title eluid2018ffbb ">
                    <h2>Restaurant Timetable</h2><span
                    className="tbk__symbol "><span></span></span></div>

                <center>
                    <table width = "100%">
                        <thead>
                        <tr>
                            <th>Meal type</th>
                            <th>Starts at : </th>
                            <th>Ends at : </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Breakfast</td>
                            <td>7 AM</td>
                            <td>8 AM</td>
                        </tr>
                        <tr>
                            <td>Lunch</td>
                            <td>12 PM</td>
                            <td>2 PM</td>
                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td>7 PM</td>
                            <td>9 PM</td>
                        </tr>
                        </tbody>
                    </table></center>

            </div>


        );
    }
}

export default RestaurantTimetable