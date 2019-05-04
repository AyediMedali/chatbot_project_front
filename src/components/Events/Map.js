import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {
    constructor(props) {
        super(props);

    }

    handleClick(event) {
        var lat = event.latLng.lat(), lng = event.latLng.lng();
        console.log(this.props.eventId[this.props.eventId.length-1].body.msg);
        fetch('https://chatbot-bug-hunters-back.herokuapp.com/event/updateGeo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.props.eventId[this.props.eventId.length-1].body.msg,
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })

        })
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
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{height: `500px`, width: '700px'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />

                <h4>yeah</h4>
            </div>
        );
    }
};
export default Map;