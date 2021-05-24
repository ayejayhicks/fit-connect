import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './Footer.css'

export const FooterContent = (props) => (

  <Container>
    {/* Column 1 */}
    <Row>
      <Col xs={4} className="footerColumn1">
        <ul className="list-unstyled">
          <h6 id="about">About Us</h6>
          <li className="bodyTextFooter"> Fit Connect was created by a group of developers who believe joining a team or having partners to push yourself harder is more efficient than do it by yourself. </li>
          <br></br>
          <h6>Mission</h6>
          <li className="bodyTextFooter"> We want to provide better ways for people to connect to each other to produce results!</li>
        </ul>
      </Col>

      {/* EmptyColumn 2 */}
      <Col xs={3}>
      </Col>

      {/* Column 3 */}
      <Col xs={5} className="footerColumn2">
        <Form action="https://formsubmit.co/el/fawoyo" method="POST">
          <input type="hidden" name="_captcha" value="false"></input>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <Button variant="primary" type="submit"  >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>

);
