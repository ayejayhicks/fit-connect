import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./FirstSection.css"

export const FirstSection = () => (

    <>
        <Container>
            <Row id="marginRow">
                <Col xl="6" className="parent">
                    <CardDeck className="text-center cardAlign">
                        <Card className="mb-5 border-0 align-items-center">
                            <Card.Body>
                                <Card.Title><h2>Trying to achieve new goals?</h2></Card.Title>
                                <Card.Text className="text">
                                    Fit-Connect provides a better way for fitness enthusiasts to connect with each other. Here you can register or create your own event and find people who might be looking for an extra push or just for an accountability partner. Join us today!
    
                            </Card.Text>
                                <Button variant="flat" size="" href="/signup"> Join Us </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
                <Col xl="6">
                    <div className="img0Div">
                        <div className="img0 mt-5" alt="people-training"></div>
                    </div>
                </Col>

            </Row>

                            </Card.Text>
                <Button variant="flat" size="" href="/signup"> Join Us </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
        <Col xl="6">
          <div className="img0Div">
            <div className="img0 mt-5" alt="people-training"></div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);
