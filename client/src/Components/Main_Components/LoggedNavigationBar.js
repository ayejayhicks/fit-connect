import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./LoggedNavigationBar.css";
import navBarImage from "../../Assets/fitness-navbar.svg";
import { scroller } from 'react-scroll';

export const LoggedNavigationBar = () => (
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
                   

                    <Button variant="flat" href="/"> Logout </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);