import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./SecondSection.css"


export const SecondSection = () => (
    <>
         <Container className="Container">
            <Row id="marginRow">
                <Col xl="6" className="left_bottom">
                    <div className="img2Div">
                        <div className="img2" alt="people-training"></div>
                    </div>
                </Col>
                <Col xl="6" className="right_top">
                    <CardDeck className="text-center cardAlign2">
                        <Card className="border-0 align-items-center">
                            <Card.Body>
                                <Card.Title><h2>Workout from the safety of your home!</h2></Card.Title>
                                <Card.Text className="text">
                                    Covid has hit everyone differently. We understand the impact that it has caused many of you in relation to your day to day goals and activities. We also understand that you may not be ready to come outside just yet, but worry not, Fit-Connect allows you to create or join an online 
                                    event where you will be connected with others from their own homes. Let's get it done, TOGETHER!
                        </Card.Text>
                                <Button variant="flat" size="" href="/signup"> Join Us </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    </>

);
