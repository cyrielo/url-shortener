import React from 'react';
import { Navbar, NavbarBrand, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shorts from '../../assets/img/shorts.png';
import './HeaderNav.scss';
const HeaderNav = props => {
  return (
    <Navbar className="site-header py-1 px-0 justify-content-between bg-white">
      <Row className="w-100 header-row mx-0">
        <Col lg={ {span: 4, offset: 1} }>
          <NavbarBrand href="/" as="a">
            <img src={shorts} width="49" className="logo mr-3" alt="Site logo"/>
            <span className="site-name">Sweet Shortener</span>
          </NavbarBrand>
        </Col>
        <Col lg={6}>
          <ListGroup className="float-right d-inline-block" variant="flush" as="ul">
            <ListGroup.Item className="px-2 border-0 d-inline-block" as="li">
              <Link to="#">Pricing</Link>
            </ListGroup.Item>
            <ListGroup.Item className="px-2 border-0 d-inline-block" as="li">
              <Link to="#">Login</Link>
            </ListGroup.Item>
            <ListGroup.Item className="px-2 border-0 d-inline-block" as="li">
              <Link to="#">Get Started</Link>
            </ListGroup.Item>
          </ListGroup>        
        </Col>
      </Row>
    </Navbar>
  );
};

export default HeaderNav;
