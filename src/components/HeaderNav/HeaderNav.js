import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.scss';
const HeaderNav = props => {
  return (
    <Navbar className="site-header justify-content-between bg-white">
      <section>
        <NavbarBrand>
          Code Culture
        </NavbarBrand>
        <ul className="pl-0 d-inline-block">
          <li className="d-inline-block mr-2">
            <Link to="#">Famous languages</Link>
          </li>
          <li className="d-inline-block mr-2">
            <Link to="#">Famous Projects</Link>
          </li>
          <li className="d-inline-block mr-2">
            <Link to="#">Hall of Fame</Link>
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