import React, { Component } from "react";
import API from "../../utils/API";
import { Card, Col, Row, Button } from 'react-bootstrap'
const moment = require('moment');

class Events extends Component {
    state = {
        events: "",
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => {
        API.getEvents()
            .then(res => {
                //alert(res.data);
                return this.setState({
                    events: res.data
                });
            }
            )
            .catch(err => console.log(err));
    };


    render() {
        let cards = "";
        if (this.state.events) {
            cards = this.state.events.map(function (element) {
                const eventdate = new Date(element.date);
                return <Col md={4}>
                <Card style={{ width: '20rem' }} className="bg-dark text-white mb-5 mt-5 ml-5 mr-5">
                    <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oTz2p2B3qG8hkzcfoWijkNQn38UxGZZZDw&usqp=CAU"} alt="Card Image" />
                    <Card.ImgOverlay>
                        <h2 className="CardTitle">{element.eventType}</h2>
                    </Card.ImgOverlay>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Card.Title>Event</Card.Title>
                                <Card.Text className="eventName"> {element.eventType} </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Enrolled</Card.Title>
                                <Card.Text className="participants"> {element.enrollmentCapacity}/10 </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>City</Card.Title>
                                <Card.Text className="eventCity">  {element.city} </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Level</Card.Title>
                                <Card.Text className="level">  {element.fitnessLevel} </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Date</Card.Title>
                                <Card.Text className="Date"> {moment(eventdate).format('MMMM DD, YYYY')} </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Time</Card.Title>
                                <Card.Text className="Date"> {moment(eventdate).format('hh:mm A')} </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Event Location</Card.Title>
                        <Card.Text> {element.location} </Card.Text>
                    </Card.Body>
                    <Card.Body>

                        <Col>
                            <Button variant="flat" className="container-xl" href="#">Register</Button>
                        </Col>
                        <Col>

                        </Col>

                    </Card.Body>
                </Card>
            </Col>
            });
        }
        return (<Row>{cards}</Row>);
    }
}

export default Events;
