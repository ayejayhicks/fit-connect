import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./LoggedNavigationBar.css";
import navBarImage from "../../Assets/fitness-navbar.jpg";
import API from '../../utils/API';
import AuthService from '../../utils/AuthService';

class LoggedNavigationBar extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    handleLogout = () => {
        API.logout()
            .then(res => {
                AuthService.logout();
                window.location.href = '/';
                return
            }
            )
            .catch(err => console.log(err));
    };

    render() {
        return <>
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
                        <Button variant="flat" onClick={this.handleLogout}> Logout </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    }
}

export default LoggedNavigationBar;
