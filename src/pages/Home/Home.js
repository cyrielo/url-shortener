import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import RightSideBar from '../../components/RightSidebar/RightSidebar';
import './Home.scss';
const Home = props => {
  return (
    <>
      <Row className="mt-5 mx-0 homepage">
        <Col className="" lg={{span: 4, offset: 1}}>
            <Card className="border-0 my-5 w-75 bg-transparent">
              <Card.Body className="p-0">
                <div className="link-shadow text-center mb-5 shadow-sm p-2 rounded-circle d-inline-block">
                  <i class="zmdi zmdi-8tracks"></i>
                </div>
                <div className="promo-head">
                  <h2>
                    A simple link but a powerful tool 
                    for <strike>Youtubers.</strike>
                  </h2>
                  <p>
                    Our tool allows you to seamlessly track your audience with simple and 
                    easy-to-remember yet powerful links and provide your customers a unique tailored experience.
                  </p>
                </div>
                <div className="input-area mt-5">
                  <div class="input-group mb-3 shadow p-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="zmdi zmdi-8tracks"></i></span>
                    </div>
                    <input type="url" class="form-control border-0" placeholder="https://youtube.com/watch?v=qidysnts" aria-label="url" aria-describedby="basic-addon1"/>
                    <button className="btn text-white shorten-btn px-4"><i class="zmdi zmdi-copy"></i> Copy</button>
                  </div>
                  
                </div>
                <div className="url-options mt-5">
                  Share via Email | Facebook | Twitter 
                </div>
              </Card.Body>
            </Card>
          </Col>
        <Col className="" lg="6" >
          <div className="d-flex justify-content-end marketing-cards my-5">
            <Card className="border-0 m-2 shadow p-3 w-50 marketing-card float-right">
              <Card.Body className="p-0">
                <strong>Measure. Optimize</strong>
                <p>
                  Use data to optimize your marketing campaing's performance.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center marketing-cards mb-5">
            <Card className="border-0 m-2 shadow p-3 w-50 marketing-card float-right">
                <Card.Body className="p-0">
                  <strong>Measure. Optimize</strong>
                  <p>
                    Share your link to your network.
                  </p>
                </Card.Body>
              </Card>
          </div>

          <div className="d-flex justify-content-end marketing-cards mb-5">
            <Card className="border-0 m-2 shadow p-3 w-50 marketing-card float-right">
              <Card.Body className="p-0">
                <strong>Measure. Optimize</strong>
                <p> Target an audience that fits your needs.</p>
              </Card.Body>
            </Card>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default Home;
