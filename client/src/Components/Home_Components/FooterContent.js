import React, { useState } from 'react'
import { Row, Col, Form, Button, Container, Alert } from 'react-bootstrap'
import './Footer.css'

const FooterContent = () => {

    useState()

    return (

        <Container>
            {/* Column 1 */}
            <Row>
                <Col xs={4} className="footerColumn1">
                    <ul className="list-unstyled">
                        <h6>About Us</h6>
                        <li className="bodyTextFooter"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremq laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto</li>
                        <br></br>
                        <h6>Mission</h6>
                        <li className="bodyTextFooter"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremq laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto</li>

                    </ul>
                </Col>

                {/* EmptyColumn 2 */}
                <Col xs={3}>
                </Col>

                {/* Column 3 */}
                <Col xs={5}>
                    <Form onSubmit="Test" action="https://formsubmit.co/el/fawoyo" method="POST">
                        <input type="hidden" name="_captcha" value="false"></input>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" alert="test" >
                            Submit
                        </Button>
                        <Alert color="primary"> Testing </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterContent;