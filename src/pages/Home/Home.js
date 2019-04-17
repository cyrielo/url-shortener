import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Spot from '../../components/Spot/Spot';
import RightSideBar from '../../components/RightSidebar/RightSidebar';
const Home = props => {
  return (
    <Container className="mt-4">
      <Row>
        <Col lg={{span: 6, offset: 1}}>
          <Spot />

        </Col>
        <Col lg="4" >
          <RightSideBar />
        </Col>
      </Row>      
    </Container>
  )
}

export default Home;
