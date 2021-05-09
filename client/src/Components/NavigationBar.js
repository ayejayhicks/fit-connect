import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import navBarImage from '../Assets/fitness-navbar.svg'

export const NavigationBar = () => (
    <React.Fragment>
        <Navbar bg="light" variant="liggitht">
        <Container fluid>
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={navBarImage}
                    width=""
                    height=""
                    className="d-inline-block align-top"
                />{' '}
    </Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#memes">Features</Nav.Link>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Button variant="outline-info">Search</Button>
            </Nav>
        </Container>
        </Navbar>
        </React.Fragment>
);