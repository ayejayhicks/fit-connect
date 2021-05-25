import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './SignInFooter.css'

export const SignInFooterContent = (props) => (

    <Container className="signInContainer">
        {/* Column 1 */}
        <Row>
            <Col xs={4} className="footerColumn1">
                <ul className="list-unstyled">
                    <h6>About Us</h6>
                    <li className="bodyTextFooter"> Fit Connect was created by a group of developers who believe joining a team or having partners to push yourself harder is more efficient than do it by yourself.</li>
                    <br></br>
                    <h6>Mission</h6>
                    <li className="bodyTextFooter">Our mission is to provide an avenue for active individuals to connect with each other to produce results!</li>

      {/* EmptyColumn 2 */}
      <Col xs={3} />

      {/* Column 3 */}
      <Col xs={5} className="footerColumn2">
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
