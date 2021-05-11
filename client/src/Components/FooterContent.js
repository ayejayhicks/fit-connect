import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './Footer.css'

export const FooterContent = (props) => (

<Container>
    {/* Column 1 */}
    <Row>
        <Col>
            <ul className="list-unstyled">
                <h4>About Us</h4>
                <li> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto</li>
                <br></br>
                <h4>Mission</h4>
                <li> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto</li>

            </ul>
        </Col>
        {/* Column 2 */}
        <Col>
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