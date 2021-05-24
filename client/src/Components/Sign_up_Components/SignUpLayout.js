import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const SignUpLayout = (props) => (
  <Container>
    <Row>
      {props.children}
    </Row>
  </Container>
);
