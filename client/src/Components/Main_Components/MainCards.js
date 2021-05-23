import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
// import './MainCards.css'
import '../../index.css'
import Events from './Events'
import './MainCards.css'


export const MainCards = () => (
    <>
        <Row>
            <Col>
                <h1 className="mt-5 ml-3">
                    UPCOMING EVENTS
  </h1>
            </Col>
            <Col>
                <Button size="lg" variant="danger" className="createEventButton mt-5 float-right mr-3" 
                href="/createEvent" > <h1 className="plusButton">+</h1> </Button>
            </Col>
            </Row>     
        <Events />
    </>
);