import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './MarketingCard.scss';

const MarketingCard = props => {
  const { title, featuredImage, children, content } = props;
  let className = props.className || null;

  return (
    <Card className={`border-0 m-2 shadow px-3 pt-3 w-50 marketing-card ${ className }`}>
      <Card.Body className="p-0">
        <Image src={featuredImage} fluid className="d-block mb-2" />
        <strong> { title } </strong>
        <p className="p-0">
          { children || content }
        </p>
      </Card.Body>
    </Card>
  )
}

export default MarketingCard;
