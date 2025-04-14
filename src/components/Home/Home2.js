import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // Icon for Portfolio link

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I recently graduated with a B.Sc. in Information Technology from
              the University of Information Technology - VNUHCM. I have a strong
              foundation in OOP, data structures, and RESTful API development,
              and I have built full-stack web applications using Java Spring
              Boot, ReactJS, and NodeJS.
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> Java, C++, and JavaScript</b>
              </i>
              , and have hands-on experience with frameworks including
              <i>
                <b className="purple">
                  {" "}
                  Spring Boot, NodeJS, ExpressJS, ReactJS, React Native and
                  NextJS
                </b>
              </i>
              .
              <br />
              <br />
              My interests include developing scalable backend systems, building
              responsive web applications, and continuously learning new
              technologies to solve real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lqt2201"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lqtoan2201/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://lqtoan.id.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FiExternalLink />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
