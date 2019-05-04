import React from "react";
import {Carousel} from "react-bootstrap";
import Map from "../Events/Map";

class CarouselObjects extends React.Component {

    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null,
            objects: []
        };
    }

    componentDidMount() {
        var self = this;
        this.setState({objects: this.props.data});
        console.log(this.props.data);

    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const {index, direction} = this.state;
        const objects = this.state.objects;
        const data = this.props.data;
        if (!data) {
            return (<div><h1>No data are currently in our our Databases</h1></div>)

        } else
            return (

                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    {data.map((value, index) => {
                        return (<Carousel.Item>
                            <img style={{height: `500px`, width: '700px'}}
                                className="d-block w-100"
                                src={value.logo}
                                alt={value.name}
                            />
                            <Carousel.Caption>
                                <h3 style={{color: 'white', backgroundColor: 'red'}}>{value.name}</h3>
                                <p style={{color: 'white', backgroundColor: 'red'}}>Description
                                    : {value.description}.</p>
                                <p style={{color: 'white', backgroundColor: 'red'}}>Additional info : <br></br>
                                    <ul style={{color: 'white', backgroundColor: 'red'}}>
                                        <li>Head quarter: {value.hq}</li>
                                        <li>President : {value.president}</li>
                                        <li>Email : {value.email}</li>
                                    </ul>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })}
                </Carousel>
            );
    }
}

export default CarouselObjects;