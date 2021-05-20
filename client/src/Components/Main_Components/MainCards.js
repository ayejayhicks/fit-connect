import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
// import './MainCards.css'
import '../../index.css'
import Events from './Events'


export const MainCards = () => (
    <>
        <Row>
            <Col>
                <h1 className="mt-5 ">
                    UPCOMING EVENTS
  </h1>
            </Col>
            <Col>
                <Button size="lg" variant="danger" className="createEventButton mt-5  float-right" href="/createEvent" block> Create Event</Button>
            </Col>
        </Row>
        <Events />
    </>
);