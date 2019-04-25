import React from "react";
import {Carousel} from "react-bootstrap";
import Map from "../Events/Map";

class CarouselObjects extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
            objects: []
        };


    }

    componentDidMount() {
        fetch('http://localhost:3000/lostOb/all', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            if (response.ok) {
                console.log('ok')
                return response.json();
            } else {
                console.log('error');
            }
        }).then(function (responseBody) {
            if (responseBody === "error")
                console.log('error');
            else {
                this.setState({objects: responseBody});
            }

        }).catch(function (error) {
            console.log("rejected: ", error);
        });


    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const {index, direction} = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                {this.state.objects.map(ele =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placekitten.com/g/400/200"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/g/400/200"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/g/400/200"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/g/400/200"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselObjects;