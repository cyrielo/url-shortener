import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.scss';
const HeaderNav = props => {
  return (
    <Navbar bg="light" className="site-header bg-white">
      <NavbarBrand>
        Discover Nigeria
      </NavbarBrand>
      <Link to="#">Top spots</Link>
      <Link to="#">Road trips</Link>
    </Navbar>
  );
};

export default HeaderNav;
