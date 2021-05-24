import React from 'react'
import { Row } from 'react-bootstrap'
import './Footer.css'

export const FooterSection = (props) => (

  <Row className="footerMargin">
    {props.children}
  </Row>
);
