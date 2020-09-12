import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";
import Container from "react-bootstrap/Container";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-5">
              <a href="mailto:azimpanjwar@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="azimpanjwar@gmail.com">
                  <i className="fa fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-5">
              <a href="https://www.linkedin.com/in/azim-ansari-37aa421a6/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fa fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-5">
              <a href="https://www.facebook.com/azimpanjwar/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fa fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-5">
              <a href="https://github.com/Azim-ansari-AU7" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fa fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>          </Col>
        </Row>
        <Container>
          <Row className="pt-10 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-3 mr-0 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={15} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Azim Ansari</strong>
               <ul>
                 <li>Email: azimpanjwar@gmail.com</li>
                 <li>Phone No.: +91 74 880 239 80 </li>
                 <li>Phone No.: +91 77 399 452 98 </li>
                 <li>Address : New Delhi ,Jharoda Majra, Burari 11084</li>
                 Feel free to Contact with me.
               </ul>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1pL3DswsSaPXvYLhaY2AzwK64fA21NdR8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Azim-ansari-AU7" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/azim-ansari-37aa421a6/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  Thank You !!
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
