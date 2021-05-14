import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './SignInFooter.css'

export const SignInFooterContent = (props) => (

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
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Col>
        </Row>
    </Container>

);