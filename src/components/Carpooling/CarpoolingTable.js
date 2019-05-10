import React from "react";
import {Carousel} from "react-bootstrap";
import Map from "../Events/Map";

class CarpoolingTable extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.updateRequest = this.updateRequest.bind(this);
        this.state = {
            data: [],
            id: 0
        }
    }


    componentDidMount() {
        this.setState({data: this.props.data})
    }

    updateRequest(id) {
        var self = this;
        fetch('http://localhost:3000/carpooling/request', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            })
        }).then(function (response) {
            if (response.ok) {
                console.log('ok')
                return response.json();
            } else {
                console.log('error');
            }
        }).then(function (responseBody) {
            if (responseBody === "success") {
                alert('You have requested carpooling successfully');
                self.setState({
                    data : self.props.data,
                    id : id
                })
            } else {
                alert("Error : " + responseBody);
            }
            self.props.history.push('/');
        }).catch(function (error) {
            console.log("rejected: ", error);
        });

    }

    render() {
        const data = this.state.data;
        if (this.state.data) {
            return (
                <table className="table table-striped table-dark table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Email</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Available Places</th>
                        <th scope="col">Description</th>
                        <th scope="col">City of depart</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((item, i) => (
                        <tr>
                            <th scope="row">{i}</th>
                            <td>{item.owner.first_name} {item.owner.last_name}</td>
                            <td>{item.owner.email}</td>
                            <td>{item.owner.phone_number}</td>
                            <td>{item.available_places}</td>
                            <td>{item.description}</td>
                            <td>{item.city}</td>
                            <td>
                                <button className="btn btn-primary"
                                        onClick={() => this.updateRequest(item._id)}>Request
                                </button>
                            </td>
                        </tr>
                    ))}


                    </tbody>
                </table>

            );
        }
    }
}

export default CarpoolingTable;