import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';

class CloseEventMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},    //Shows the infoWindow to the selected place upon a marker
            lat: this.props.lat,
            lng: this.props.lng,
            eventName: this.props.eventName
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    handleClick(event) {
        var lat = this.props.lat, lng = this.props.lng, eventName = this.props.eventName;
        console.log(lat);
        console.log(lng);
        console.log(eventName);

    }


    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 36.898469, lng: 10.190354}}
                defaultZoom={13}
                onClick={(e) => this.handleClick(e)}

            >
                <Marker
                    onClick={this.onMarkerClick}
                    position={{lat: this.state.lat, lng: this.state.lng}}
                >
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.eventName}</h4>
                        </div>
                    </InfoWindow>
                </Marker> </GoogleMap>
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
export default CloseEventMap;