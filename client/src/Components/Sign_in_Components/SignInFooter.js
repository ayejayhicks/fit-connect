import React from 'react'
import { Row } from 'react-bootstrap'
import './SignInFooter.css'

export const SignInFooterSection = (props) => (

        <Row className="SignInFooterMargin">
        {props.children}
        </Row>
);

