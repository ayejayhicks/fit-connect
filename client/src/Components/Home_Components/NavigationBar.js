import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import "./NavigationBar.css";
import navBarImage from "../../Assets/fitness-navbar.svg";
import { scroller } from 'react-scroll';
import AuthService from '../../utils/AuthService';
import API from '../../utils/API';

class NavigationBar extends Component {
  
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
    console.log("Logged in?");
    const logged_in = AuthService.isLoggedIn();
    console.log(logged_in);
    let navLinks = "";
    if (logged_in) {
      navLinks =
        <Nav className="ml-auto">
          <Nav.Link
            onClick={(e) => {
              e.preventDefault();
              scroller.scrollTo('about', {
                smooth: true
              });
            }}
            className="textNavBar">
            About
      </Nav.Link>
          <Nav.Link className="textNavBar" href="/main"> Events </Nav.Link>
          <Nav.Link className="textNavBar" onClick={this.handleLogout}> Logout </Nav.Link>
        </Nav>
    } else {
      navLinks =
        <Nav className="ml-auto">
          <Nav.Link
            onClick={(e) => {
              e.preventDefault();
              scroller.scrollTo('about', {
                smooth: true
              });
            }}
            className="textNavBar">
            About
      </Nav.Link>
          <Nav.Link className="textNavBar" href="/signin">Login</Nav.Link>
          <Button variant="flat" href="/signup"> Sign Up </Button>
        </Nav >
    }
    return (
      <>
        <Navbar id="navBackground" collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={navBarImage}
              width=""
              height="" />{' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            {navLinks}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;