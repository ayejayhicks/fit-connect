import React from 'react'
import { Card, Col, Row, Button, H1 } from 'react-bootstrap'
// import './MainCards.css'
import '../../index.css'
import Events from './Events'


export const MainCards = () => (
    <>

        <h1 className="mt-5">
            UPCOMING EVENTS
  </h1>

        <Events />

    </>
);