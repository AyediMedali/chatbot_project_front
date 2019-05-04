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
        this.getLost_objects();
    }


    componentDidMount() {
        var self = this;
    }

    getData() {
        (async () => {
            try {
                var ob = await this.getLost_objects();
                console.log(ob);
            }
            catch (e) {
                return "error";
            }
        })()
    }

    async getLost_objects() {

        var self = this;
        fetch('https://chatbot-bug-hunters-back.herokuapp.com/lostOb/all', {
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
                self.setState({objects: responseBody}, () => console.log(self.state.objects))
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
        const objects = this.state.objects;
        const data = this.props.data;
        if (!objects || !data) {
            return (<div><h1>No lost objects are currently in our our Databases</h1></div>)

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
                                src="http://placekitten.com/g/400/200"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{color: 'white', backgroundColor: 'red'}}>{value.name}</h3>
                                <p style={{color: 'white', backgroundColor: 'red'}}>Description : {value.description}.</p>
                                <p style={{color: 'white', backgroundColor: 'red'}}>Additional info : <br></br>
                                    <ul style={{color: 'white', backgroundColor: 'red'}}>
                                        <li>Where found : {value.where_found}</li>
                                        <li>Where to get : {value.where_to_get}</li>
                                        <li>Found  : {value.found}</li>
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