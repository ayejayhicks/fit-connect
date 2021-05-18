import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./Main_Navbar.css";
import navBarImage from "../../Assets/fitness-navbar.svg"

export const NavigationBar = () => (
    <>
        <Navbar id="navBackground" collapseOnSelect expand="lg">
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
                    <Nav.Link className="textNavBar" href="/">About</Nav.Link>
                    <Nav.Link className="textNavBar" href="/">Features</Nav.Link>
                    <Nav.Link className="textNavBar" href="/signin">Login</Nav.Link>
                    <Button variant="flat" href="/signup"> Sign Up </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);