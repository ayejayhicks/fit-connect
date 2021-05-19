import React from 'react'
import { Card, Col, Row, Button, H1 } from 'react-bootstrap'
import './MainCards.css'
import '../../index.css'


export const MainCards = () => (
    <>

        <h1 className="mt-5">
            UPCOMING EVENTS
  </h1>

        <Row>
            <Col md={4}>
                <Card style={{ width: '20rem' }} className="bg-dark text-white mb-5 mt-5 ml-5 mr-5">
                    <Card.Img variant="top" src={"https://cdn.vox-cdn.com/thumbor/KO_gWQtcDEpfVrmVFuJnb9EYHo0=/0x40:1000x790/1200x800/filters:focal(0x40:1000x790)/cdn.vox-cdn.com/uploads/chorus_image/image/46889290/shutterstock_266758136.0.0.jpg"} alt="Card Image" />
                    <Card.ImgOverlay>
                        <h2 className="CardTitle">Name of Event</h2>
                    </Card.ImgOverlay>
                    <Card.Body>

                        <Row>
                            <Col >
                                <Card.Title>Event</Card.Title>
                                <Card.Text className="eventName"> 5k Run </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Enrolled</Card.Title>
                                <Card.Text className="participants"> 0/10 </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>City</Card.Title>
                                <Card.Text className="eventCity"> Atlanta </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Level</Card.Title>
                                <Card.Text className="level"> Beginner </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Date</Card.Title>
                                <Card.Text className="Date"> Aug, 05th </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Time</Card.Title>
                                <Card.Text className="Date"> 2:00pm </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Event Location</Card.Title>
                        <Card.Text> 123 Avenue Rockstar, Atlanta, GA </Card.Text>
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

            <Col md={4}>
                <Card style={{ width: '20rem' }} className="bg-dark text-white mb-5 mt-5 ml-5 mr-5">
                    <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oTz2p2B3qG8hkzcfoWijkNQn38UxGZZZDw&usqp=CAU"} alt="Card Image" />
                    <Card.ImgOverlay>
                        <h2 className="CardTitle">Yoga with Maria</h2>
                    </Card.ImgOverlay>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Card.Title>Event</Card.Title>
                                <Card.Text className="eventName"> Yoga </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Enrolled</Card.Title>
                                <Card.Text className="participants"> 0/10 </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>City</Card.Title>
                                <Card.Text className="eventCity"> Atlanta </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Level</Card.Title>
                                <Card.Text className="level"> Beginner </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Date</Card.Title>
                                <Card.Text className="Date"> Aug, 05th </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Time</Card.Title>
                                <Card.Text className="Date"> 2:00pm </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Event Location</Card.Title>
                        <Card.Text> 123 Avenue Rockstar, Atlanta, GA </Card.Text>
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

            <Col md={4}>
                <Card style={{ width: '20rem' }} className="bg-dark text-white mb-5 mt-5 ml-5 mr-5">
                    <Card.Img variant="top" src={"data:image/jpeg;base64,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"} alt="Card Image" />
                    <Card.ImgOverlay>
                        <h2 className="CardTitle">Weight Lifting</h2>
                    </Card.ImgOverlay>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Card.Title>Event</Card.Title>
                                <Card.Text className="eventName"> Weight Lifting </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Enrolled</Card.Title>
                                <Card.Text className="participants"> 0/10 </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>City</Card.Title>
                                <Card.Text className="eventCity"> Atlanta </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Level</Card.Title>
                                <Card.Text className="level"> Beginner </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Date</Card.Title>
                                <Card.Text className="Date"> Aug, 05th </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Time</Card.Title>
                                <Card.Text className="Date"> 2:00pm </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Event Location</Card.Title>
                        <Card.Text> 123 Avenue Rockstar, Atlanta, GA </Card.Text>
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
        </Row>
        </Row>
    </>
);