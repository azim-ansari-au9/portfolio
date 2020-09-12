import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details-b pb-10">ABOUT ME</h1>
        <Container>
          <Row className="pt-10 pb-5 align-items-center">
            <Col xs={15} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={15} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Azim Ansari</strong>
                <br />An Open-source Developer,Full-Stack Web Developer,Tech-BloggerMy Skills majorily include React Js Alog with knowledge of Java Script And python. 
                <br />I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and MongoDB as my tech stack.
                <br />I'm an Enginnering Student And i am looking for full time job oppurtunity.
                <br />In 2019, I successfully completed my Engineering with specialization in 'Electrical Engineering'.
                <br />I love working and Developing cool stuff with a great source.
                <br />
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
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
