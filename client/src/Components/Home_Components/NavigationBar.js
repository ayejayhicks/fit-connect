import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./NavigationBar.css";
import navBarImage from "../../Assets/fitness-navbar.svg"

export const NavigationBar = () => (
    <>
        <style type="text/css">
            {`
    .btn-flat {
      background-color: #F46D10;
      color: white;
      padding-right: 20px;
      padding-left: 20px;
      margin-left: 10px;
      font-weight: bold;
      font-family: roboto;
    }

    @media (max-width: 573px){
    margin-left:0px;
    margin-right: 0px;
    }
    `}
        </style>

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
                    <Nav.Link className="textNavBar" href="/">About</Nav.Link>
                    <Nav.Link className="textNavBar" href="/">Features</Nav.Link>
                    <Nav.Link className="textNavBar" href="/login">Login</Nav.Link>
                    <Button variant="flat" size=""> Sign Up </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);