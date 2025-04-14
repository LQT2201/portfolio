import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Luong Quoc Toan</span>{" "}
            from <span className="purple">Ho Chi Minh City, Vietnam.</span>
            <br />
            I recently graduated with a B.Sc. in Information Technology from the
            University of Information Technology – VNUHCM.
            <br />
            My technical focus is on full-stack development, especially with
            Java Spring Boot, NodeJS, ReactJS, and MongoDB.
            <br />
            <br />
            Besides coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and sharing tech blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that solve real problems and empower people!"
          </p>
          <footer className="blockquote-footer">Luong Quoc Toan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
