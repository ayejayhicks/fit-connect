import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./NavigationBar.css";
import navBarImage from "../Assets/fitness-navbar.svg"

export const NavigationBar = () => (

   
    
    <Navbar id="navBackground" collapseOnSelect expand="sm">
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
                <Navbar.Collapse >
                    <Nav className="ml-auto">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Features</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Button variant="outline-info">Search</Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>

);