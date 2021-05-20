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
    const logged_in = AuthService.isLoggedIn();
    let navLinks = "";
    let featureLink = "";
    if (window.location.pathname === "/" ){
      featureLink = <Nav.Link
      onClick={(e) => {
        e.preventDefault()
        scroller.scrollTo('features', {
          smooth: true
        })
      }}
      className="textNavBar">
      Features
    </Nav.Link>
    }
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
      {featureLink}
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
      {featureLink}
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