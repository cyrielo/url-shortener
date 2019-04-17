import React, { Component } from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSidebar = props => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>
            Something Cool
          </Card.Title>
        </Card.Body>
      </Card>
    </React.Fragment>

  );
}

export default RightSidebar;
