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
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
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