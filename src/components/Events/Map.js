import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }
    componentDidMount() {
        this.setState({
            id : this.props.eventId
        })

    }

    handleClick(event) {
        var lat = event.latLng.lat(), lng = event.latLng.lng();
        fetch('http://localhost:3000/event/updateGeo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // id: this.props.eventId[this.props.eventId.length-1].body.msg,
                id : this.props.eventId._id,
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })
        })
        alert('event positon is updated')
    }


    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 36.898469, lng: 10.190354}}
                defaultZoom={13}
                onClick={(e) => this.handleClick(e)}
            >
            </GoogleMap>
        ));
        const event = this.props.eventId;
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{height: `200px`, width: '500px'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        );
    }
};
export default Map;