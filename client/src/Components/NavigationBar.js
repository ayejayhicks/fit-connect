import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import navBarImage from '../Assets/fitness-navbar.svg'
import "./NavigationBar.css"

export const NavigationBar = () => (

    
        <Navbar id="navBackground" collapseOnSelect expand="md">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={navBarImage}
                        width=""
                        height=""
                        // className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#memes">Features</Nav.Link>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Button variant="outline-info">Search</Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
       
);