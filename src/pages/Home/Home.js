import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import MarketingCard from '../../components/MarketingCard/MarketingCard';
import Mock1 from '../../assets/img/mock1.png';
import Mock2 from '../../assets/img/mock2.png';
import Mock3 from '../../assets/img/mock3.png';
import SocialShareButton from '../../components/SocialShare/SocialShareButton';
import ShortenerInput from '../../components/ShortenerInput/ShortenerInput';

import './Home.scss';
const Home = props => {
  return (
    <>
      <Row className="mt-5 mx-0 homepage">
        <Col className="" lg={{span: 4, offset: 1}}>
            <Card className="border-0 my-5 w-75 bg-transparent">
              <Card.Body className="p-0">
                <div className="link-shadow text-center mb-5 shadow-sm p-2 rounded-circle d-inline-block">
                  <i className="zmdi zmdi-8tracks"></i>
                </div>
                <div className="promo-head">
                  <h2>
                    A simple link but a powerful tool 
                    for Creators.
                  </h2>
                  <section className="mt-4">
                    <p>
                      Our tool allows you to seamlessly track your audience with simple and 
                      easy-to-remember yet powerful links and provide your customers a unique tailored experience.
                    </p>                    
                  </section>
                </div>
                <div className="input-area mt-5">
                  <ShortenerInput />
                </div>
                <SocialShareButton url="breakaway" />
              </Card.Body>
            </Card>
          </Col>
        <Col className="" lg="6" >
          <div className="d-flex justify-content-end marketing-cards my-5">
            <MarketingCard featuredImage={Mock1} title="Social. Reach" content="Share your link to your network." />
          </div>

          <div className="d-flex justify-content-center marketing-cards mb-5">
            <MarketingCard featuredImage={Mock2} title="Measure. Optimize" content="Use data to optimize your marketing campaing's performance." />
          </div>

          <div className="d-flex justify-content-end marketing-cards mb-5">
            <MarketingCard  featuredImage={Mock3}  title="Target. Re-target"  content="Target an audience that fits your needs."  />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Home;
