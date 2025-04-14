import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import petImg from "../../Assets/Projects/blog.png"; // Cập nhật ảnh phù hợp
import bookImg from "../../Assets/Projects/emotion.png"; // Cập nhật ảnh phù hợp

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently based on real-world
          applications and academic work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={petImg}
              isBlog={false}
              title="THE PET – Connect Pet Lovers"
              description="A social networking platform for pet lovers. Features include real-time messaging via Socket.IO, Google/Facebook login with Passport.js, secure JWT authentication, post creation with images/videos via Cloudinary, a donation module, and more. Built with NextJS, NodeJS, and MongoDB."
              ghLink="https://github.com/LQT2201/social-network"
              demoLink="https://social-network-orpin-chi.vercel.app/homepage"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bookImg}
              isBlog={false}
              title="BOOK UIT – Bookstore Management"
              description="A responsive web app for small bookstores. Customers can search, browse, place orders, and track deliveries. Admin panel supports managing products and orders. Built with Spring Boot and NextJS; payment integrated via VNPay."
              ghLink="https://github.com/LQT2201/bookweb"
              demoLink="https://bookuit.vercel.app" // Nếu có link demo, thay thế ở đây
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
