import React from 'react'
import { Card, Col, Row, Button, H1 } from 'react-bootstrap'
// import './MainCards.css'
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
                    <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgiktCOZQV1bvGXujVZ8vDpSiHHCiX6AbMg&usqp=CAU"} alt="Card Image" />
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
    </>
);