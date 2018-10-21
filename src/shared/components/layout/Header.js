import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = props => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Logo</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/page">Page</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
        <NavItem>
          <Link to="/signin">Sign In</Link>
        </NavItem>
        <NavItem>
          <Link to="/signup">Sign Up</Link>
        </NavItem>
        <NavItem>
          <Link to="/signout">Sign Out</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
