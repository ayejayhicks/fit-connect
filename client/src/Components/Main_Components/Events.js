import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Card, Col, Row, Button } from 'react-bootstrap';
const moment = require('moment');

function Events() {
    const [events, setEvents] = useState([]);
    // This is set to true by default to indicate that events load on page load
    const [isLoadingEvents, setIsLoadingEvents] = useState(true);
    const [registerUserForEvent, setRegisterUserForEvent] = useState(null)

    useEffect(() => {
        if (!isLoadingEvents) {
            return;
        }

        setIsLoadingEvents(false);

        const loadEvents = async () => {
            try {
                const { status, data: events } = await API.getEvents()
                if (status === 200 && events?.length > 0) {
                    setEvents(events)
                } else {
                    alert('Sorry, an error occurred loading events. Please try again.')
                }
            } catch (error) {
                console.log('error', error);
                alert('Sorry, an error occurred loading events. Please try again.')
            }
        };

        loadEvents();
    }, [isLoadingEvents])

    useEffect(() => {
        const eventId = registerUserForEvent;
        console.log('eventId', eventId);
        if (!eventId) {
            return;
        }

        setRegisterUserForEvent(null)

        const registerUserRequest = async () => {
            try {
                const { status } = await API.registerUserForEvent(eventId)
                if (status === 200) {
                    // TODO: Need to figure out what should happen after a user has successfully register for an event?????
                    alert("You've successfully registered for this event! Woo hoo!");
                } else {
                    alert('Uh oh, something went wrong. Please try again.');
                }
            } catch (error) {
                console.log('error', error);
                alert('Uh oh, something went wrong. Please try again.');
            }
        }

        registerUserRequest();
    }, [registerUserForEvent])

    const eventCards = () => {
        return events.map(event => {
            console.log('event', event);
            const eventdate = new Date(event.date);
            return <Col md={4}>
                <Card style={{ width: '20rem' }} className="bg-dark text-white mb-5 mt-5 ml-5 mr-5">
                    <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oTz2p2B3qG8hkzcfoWijkNQn38UxGZZZDw&usqp=CAU"} alt="Card Image" />
                    <Card.ImgOverlay>
                        <h2 className="CardTitle">{event.eventName}</h2>
                    </Card.ImgOverlay>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Card.Title>Event</Card.Title>
                                <Card.Text className="eventName"> {event.typeOfEvent} </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Enrolled</Card.Title>
                                <Card.Text className="participants"> {event.users.length}/{event.participants} </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>City</Card.Title>
                                <Card.Text className="eventCity">  {event.city} </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Level</Card.Title>
                                <Card.Text className="level">  {event.level} </Card.Text>
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
                                <Card.Text className="Date"> {event.time}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Event Location</Card.Title>
                        <Card.Text> {event.eventLocation} </Card.Text>
                    </Card.Body>
                    <Card.Body>

                        <Col>
                            <Button
                                variant="flat"
                                className="container-xl"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setRegisterUserForEvent(event.id)
                                }}>
                                Register
                            </Button>
                        </Col>
                        <Col>

                        </Col>

                    </Card.Body>
                </Card>
            </Col>
        })
    }

    return (
        <Row>{eventCards()}</Row>
    );
}

export default Events;
