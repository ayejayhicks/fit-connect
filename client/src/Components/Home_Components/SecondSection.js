import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./SecondSection.css"


export const SecondSection = () => (
    <>
        <style type="text/css">
            {`
    .btn-flat {
      background-color: #F46D10;
      color: white;
      padding-right: 40px;
      padding-left: 40px;
      margin-left: 10px;
      font-weight: bold;
      font-family: roboto;
    }

    @media (max-width: 573px){
    margin-left:0px;
    margin-right: 0px;
    }
    `}
        </style>

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
                                <Button variant="flat" size=""> Join Us </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    </>


);