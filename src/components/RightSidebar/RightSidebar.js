import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RightSidebar.scss';

const RightSidebar = props => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="p-0">
          <strong className="px-3 py-4 d-block navbar-text sidebar-title">
            Hottest Repositories
          </strong>
         
          <ListGroup variant="flush">
            <ListGroup.Item className="p-3 border-top-0">Cras justo odio</ListGroup.Item>
            <ListGroup.Item className="p-3">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item className="p-3">Morbi leo risus</ListGroup.Item>
            <ListGroup.Item className="p-3">Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item className="p-3">Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </React.Fragment>

  );
}

export default RightSidebar;
