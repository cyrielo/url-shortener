import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.scss';
const HeaderNav = props => {
  return (
    <Navbar bg="light" className="site-header justify-content-around bg-white">
      <section>
        <NavbarBrand>
          Discover Nigeria
        </NavbarBrand>
        <ul className="pl-0 d-inline-block">
          <li className="d-inline-block mr-2">
            <Link to="#">Top spots</Link>
          </li>
          <li className="d-inline-block">
            <Link to="#">Road trips</Link>
          </li>
        </ul>
        
       
      </section>
      <section className="float-right">
        <Link to="#">Search</Link>
      </section>
    </Navbar>
  );
};

export default HeaderNav;
