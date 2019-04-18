import React, { Component } from 'react';
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import RightSideBar from '../../components/RightSidebar/RightSidebar';
import './Home.scss';
const Home = props => {
  return (
    <Container className="mt-4">
      <Row>
        <Col lg="7">
          <Card className="border-0">
            <Card.Body className="p-0">
              <div className="main-title px-3 py-4">
                <strong className="">
                  Hall of Fame 
                </strong>
              </div>
              <ListGroup variant="flush" as="ul">
                <ListGroup.Item className="p-3 border-top-0" as="li">
                  <Card className="border-0 px-0">
                    <Card.Body className="p-0">
                      <Card.Title>
                        996icu / 996.ICU
                      </Card.Title>
                      <Card.Text>
                        Repo for counting stars and contributing. Press F to pay respect to glorious developers.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="5" >
          <RightSideBar />
        </Col>
      </Row>      
    </Container>
  )
}

export default Home;
