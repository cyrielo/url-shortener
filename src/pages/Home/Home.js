import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Mock1 from '../../assets/img/mock1.png';
import Mock2 from '../../assets/img/mock2.png';
import Mock3 from '../../assets/img/mock3.png';


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
                    for <strike>Youtubers.</strike>
                  </h2>
                  <section className="mt-4">
                    <p>
                      Our tool allows you to seamlessly track your audience with simple and 
                      easy-to-remember yet powerful links and provide your customers a unique tailored experience.
                    </p>                    
                  </section>
                </div>
                <div className="input-area mt-5">
                  <div className="input-group mb-3 shadow p-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-transparent border-0" id="basic-addon1"><i className="zmdi zmdi-8tracks"></i></span>
                    </div>
                    <input type="url" className="form-control bg-transparent border-0" placeholder="https://youtube.com/watch?v=qidysnts" aria-label="url" aria-describedby="basic-addon1"/>
                    <button className="btn text-white shorten-btn px-4"><i className="zmdi zmdi-copy"></i> Copy</button>
                  </div>
                  
                </div>
                <div className="url-options mt-4">
                  <ul className="d-inline-block social-share bg-diabled text-white p-3">
                    <li className="d-inline-block mr-5">
                      <i className="zmdi zmdi-share"></i>
                    </li >
                    <li className="d-inline-block mr-2">
                      <i className="zmdi zmdi-email"></i>
                    </li >
                    <li className="d-inline-block mr-2">
                      <i className="zmdi zmdi-facebook"></i>
                    </li>
                    <li className="d-inline-block mr-2">
                      <i className="zmdi zmdi-twitter"></i>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        <Col className="" lg="6" >
          <div className="d-flex justify-content-end marketing-cards my-5">
            <Card className="border-0 m-2 shadow px-3 pt-3 w-50 marketing-card float-right">
              <Card.Body className="p-0">
                <img src={Mock1} className="img-fluid d-block mb-2" />
                <strong>Social. Reach</strong>
                <p className="p-0">
                  Share your link to your network.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center marketing-cards mb-5">
            <Card className="border-0 m-2 shadow px-3 pt-3 w-50 marketing-card float-right">
                <Card.Body className="p-0">
                  <img src={Mock2} className="img-fluid d-block mb-2" />
                  <strong>Measure. Optimize</strong>
                  <p className="p-0">
                    Use data to optimize your marketing campaing's performance.
                  </p>
                </Card.Body>
              </Card>
          </div>

          <div className="d-flex justify-content-end marketing-cards mb-5">
            <Card className="border-0 m-2 shadow px-3 pt-3 w-50 marketing-card float-right">
              <Card.Body className="p-0">
                <img src={Mock3} className="img-fluid d-block mb-2" />
                <strong>Target. Re-target</strong>
                <p className="p-0"> Target an audience that fits your needs.</p>
              </Card.Body>
            </Card>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default Home;
