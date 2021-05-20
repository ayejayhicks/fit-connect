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
                    <Nav.Link
                        onClick={(e) => {
                            e.preventDefault()
                            scroller.scrollTo('about', {
                                smooth: true
                            })
                        }}
                        className="textNavBar">
                        About
                    </Nav.Link>
                    <Nav.Link
                        onClick={(e) => {
                            e.preventDefault()
                            scroller.scrollTo('features', {
                                smooth: true
                            })
                        }}
                        className="textNavBar">
                        Features
                    </Nav.Link>
                   
                    <Button variant="flat" href="/signup"> Sign Up </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);