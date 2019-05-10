import React from "react";

class EventsWeekTable extends React.Component {

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
        fetch('http://localhost:3000/event/join', {
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
                alert('You have joined the event successfully');
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
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Photos</th>
                        <th scope="col">Date </th>
                        <th scope="col">Available Places</th>
                        <th scope="col">Organizer</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((item, i) => (
                        <tr>
                            <th scope="row">{i}</th>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><img src={item.photo[1]} style={{height: `300px`, width: '300px'}}/></td>
                            <td>{item.date}</td>
                            <td>{item.available_places}</td>
                            <td>{item.organizer}</td>
                            <td>
                                <button className="btn btn-primary"
                                        onClick={() => this.updateRequest(item._id)}>Join
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

export default EventsWeekTable;